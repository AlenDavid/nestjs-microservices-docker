import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { UsersModule } from './users.module';

const logger = new Logger('Users');


async function bootstrap() {
  let port = Number(process.env.PORT || 3000)
  
  const microservice = await NestFactory.createMicroservice(UsersModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port
    },
  });
  
  microservice.listen(() => logger.log(`Microservice is listening at ${port}`));
}
bootstrap();