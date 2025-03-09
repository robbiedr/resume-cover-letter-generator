import Redis from "ioredis";

export class CacheService {
  private redis: Redis | null;

  constructor() {
    this.initRedis();
  }

  private initRedis() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST || "localhost",
      port: Number(process.env.REDIS_PORT) || 6379,
      enableOfflineQueue: false, // Prevents command queuing if disconnected
      retryStrategy: (times) => Math.min(times * 50, 2000), // Retry every 50ms, max 2s
    });

    this.redis.on("connect", () => {
      console.log("[CACHE] Redis connected successfully.");
    });

    this.redis.on("error", (err) => {
      console.error(`[CACHE ERROR] ${err.message}`);
    });

    this.redis.on("end", () => {
      console.warn("[CACHE] Redis connection lost. Retrying...");
    });

    this.redis.on("reconnecting", () => {
      console.log("[CACHE] Attempting to reconnect to Redis...");
    });
  }

  async get(key: string): Promise<any | null> {
    if (!this.redis) return null;

    try {
      const cachedData = await this.redis.get(key);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        console.log(
          `[CACHE HIT] Key: ${key}, Cached At: ${parsedData.timestamp}`
        );
        return parsedData;
      }
      console.log(`[CACHE MISS] Key: ${key}`);
    } catch (err) {
      console.error(`[CACHE ERROR] GET ${key}: ${err.message}`);
    }
    return null;
  }

  async set(key: string, data: any, ttl: number = 86400): Promise<void> {
    if (!this.redis) return;

    const cacheObject = {
      data,
      timestamp: new Date().toISOString(),
    };

    try {
      await this.redis.set(key, JSON.stringify(cacheObject), "EX", ttl);
      console.log(`[CACHE SET] Key: ${key}, Time: ${cacheObject.timestamp}`);
    } catch (err) {
      console.error(`[CACHE ERROR] SET ${key}: ${err.message}`);
    }
  }

  async delete(key: string): Promise<void> {
    if (!this.redis) return;

    try {
      await this.redis.del(key);
      console.log(`[CACHE DELETE] Key: ${key}`);
    } catch (err) {
      console.error(`[CACHE ERROR] DELETE ${key}: ${err.message}`);
    }
  }

  async flush(): Promise<void> {
    if (!this.redis) return;

    try {
      await this.redis.flushall();
      console.log("[CACHE FLUSH] All keys deleted");
    } catch (err) {
      console.error(`[CACHE ERROR] FLUSH: ${err.message}`);
    }
  }
}
