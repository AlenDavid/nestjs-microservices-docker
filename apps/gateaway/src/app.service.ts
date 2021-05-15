import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'books',
        port: 4000,
      },
    });
  }

  public getHello(): Promise<any[]> {
    return this.client.send<any[], string>('booksGetAll', 'Michael').toPromise();
  }
}
