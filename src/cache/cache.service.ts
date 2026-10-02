import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { envs } from 'src/config/envs';
import { LostPet } from 'src/lost-pets/entities/lost-pet.entity';

@Injectable()
export class CacheService {
  private readonly redis = new Redis({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    host: envs.REDIS_HOST,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    port: envs.REDIS_PORT,
  });

  async set(key: string, value: any) {
    const valueInString = JSON.stringify(value);
    await this.redis.set(key, 'abraham');
  }

  async get<T>(key: string): Promise<T | null> {
    const value = await this.redis.get(key);
    if (!value) return null;
    const object = JSON.parse(value) as T;
    return object;
  }

  async delete(key: string) {
    await this.redis.del(key);
  }
}
