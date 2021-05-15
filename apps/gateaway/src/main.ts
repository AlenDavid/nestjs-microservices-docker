import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('App');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.listen(3000, () => logger.log(`Microservice is listening at ${3000}`));
}
bootstrap();
