import { NestFactory } from '@nestjs/core';
import { SeedsModule } from './seeds.module';
import { UsersSeedService } from './users/users-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedsModule);

  // run
  await app.get(UsersSeedService).run();

  await app.close();
};

void runSeed();