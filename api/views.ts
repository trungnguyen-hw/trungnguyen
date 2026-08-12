import { neon } from '@neondatabase/serverless';

const INITIAL_VIEWS = 128;

type VercelRequest = { method?: string };
type VercelResponse = {
  end: () => VercelResponse;
  json: (body: unknown) => VercelResponse;
  setHeader: (name: string, value: string) => void;
  status: (statusCode: number) => VercelResponse;
};

function getDatabase() {
  const runtime = globalThis as {
    process?: { env?: Record<string, string | undefined> };
  };
  const databaseUrl = runtime.process?.env?.DATABASE_URL;
  return databaseUrl ? neon(databaseUrl) : null;
}

function sendDatabaseUnavailable(response: VercelResponse) {
  return response.status(503).json({ error: 'View counter is temporarily unavailable.' });
}

async function ensureCounterTable(sql: ReturnType<typeof neon>) {
  await sql`
    CREATE TABLE IF NOT EXISTS view_counter (
      id SMALLINT PRIMARY KEY CHECK (id = 1),
      views BIGINT NOT NULL CHECK (views >= 0)
    )
  `;
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  response.setHeader('Cache-Control', 'no-store, max-age=0');

  if (request.method === 'OPTIONS') {
    response.setHeader('Allow', 'GET, POST, OPTIONS');
    return response.status(204).end();
  }

  const sql = getDatabase();
  if (!sql) return sendDatabaseUnavailable(response);

  try {
    await ensureCounterTable(sql);

    if (request.method === 'GET') {
      // Creates the one persistent counter row at 128 if it has not existed yet.
      const rows = await sql`
        INSERT INTO view_counter (id, views)
        VALUES (1, ${INITIAL_VIEWS})
        ON CONFLICT (id) DO UPDATE SET id = view_counter.id
        RETURNING views
      `;
      return response.status(200).json({ views: Number(rows[0].views) });
    }

    if (request.method === 'POST') {
      // PostgreSQL serializes this UPSERT. Concurrent page loads each add exactly one.
      const rows = await sql`
        INSERT INTO view_counter (id, views)
        VALUES (1, ${INITIAL_VIEWS + 1})
        ON CONFLICT (id) DO UPDATE SET views = view_counter.views + 1
        RETURNING views
      `;
      return response.status(200).json({ views: Number(rows[0].views) });
    }

    response.setHeader('Allow', 'GET, POST, OPTIONS');
    return response.status(405).json({ error: 'Method not allowed.' });
  } catch (error) {
    console.error('View counter database error:', error);
    return response.status(503).json({ error: 'View counter is temporarily unavailable.' });
  }
}
