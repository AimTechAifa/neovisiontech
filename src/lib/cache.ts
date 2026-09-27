import { unstable_cache } from "next/cache";

function redisEnv() {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ""), token };
}

async function redisGet<T>(key: string): Promise<T | null> {
  const cfg = redisEnv();
  if (!cfg) return null;
  try {
    const response = await fetch(`${cfg.url}/get/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${cfg.token}` },
      cache: "no-store",
    });
    if (!response.ok) return null;
    const body = (await response.json()) as { result?: string | null };
    if (!body.result) return null;
    return JSON.parse(body.result) as T;
  } catch {
    return null;
  }
}

async function redisSet(key: string, value: unknown, seconds = 3600) {
  const cfg = redisEnv();
  if (!cfg) return;
  try {
    await fetch(cfg.url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cfg.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(["SET", key, JSON.stringify(value), "EX", String(seconds)]),
      cache: "no-store",
    });
  } catch {
    // Redis is optional. A failed write falls through to the value just loaded.
  }
}

/** Upstash Redis when configured, otherwise Next.js cache. Never throws if Redis is down. */
export async function withRedisCache<T>(key: string, tags: string[], loader: () => Promise<T>): Promise<T> {
  if (redisEnv()) {
    const hit = await redisGet<T>(key);
    if (hit) return hit;
    const value = await loader();
    await redisSet(key, value);
    return value;
  }
  return unstable_cache(loader, [key], { revalidate: 3600, tags })();
}
