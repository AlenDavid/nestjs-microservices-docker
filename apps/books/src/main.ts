import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { BooksModule } from './books.module';

const logger = new Logger('Books');

async function bootstrap() {
  let port = Number(process.env.PORT || 3000)
  
  const microservice = await NestFactory.createMicroservice(BooksModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port
    },
  });
  
  microservice.listen(() => logger.log(`Microservice is listening at ${port}`));
}
bootstrap();