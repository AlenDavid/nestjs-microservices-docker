import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { BooksModule } from './books.module';

const logger = new Logger('Books');

async function bootstrap() {
  const port = process.env.PORT || 4000
  
  const app = await NestFactory.createMicroservice(BooksModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port
    },
  });
  
  app.listen(() => logger.log(`Microservice is listening at ${port}`));
}
bootstrap();