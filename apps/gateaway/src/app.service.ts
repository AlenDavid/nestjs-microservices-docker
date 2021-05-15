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
        host: '0.0.0.0',
        port: 4000,
      },
    });
  }

  public getHello(): Promise<string> {
    return this.client.send<string, string>('booksGetAll', 'Michael').toPromise();
  }
}
