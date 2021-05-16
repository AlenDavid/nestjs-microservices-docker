import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { BooksModule } from './books.module';

const logger = new Logger('Books');

async function bootstrap() {
  let port = Number(process.env.PORT || 4000)
  
  const microservice = await NestFactory.createMicroservice(BooksModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port
    },
  });
  
  microservice.listen(() => logger.log(`Microservice is listening at ${port}`));

  const app = await NestFactory.create(BooksModule);
  app.listen(port + 1000, () => logger.log(`App is listening at ${port + 1000}`))
}
bootstrap();