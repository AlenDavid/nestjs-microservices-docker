import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private books: ClientProxy;
  private users: ClientProxy;

  constructor() {
    this.books = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'books',
        port: 4000,
      },
    });

    this.users = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'users',
        port: 4000,
      },
    });
  }

  public getHello() {
    return 'Hello, World!'
  }

  public getBooks(): Promise<any[]> {
    return this.books.send<any[], string>('booksGetAll', 'Michael').toPromise();
  }


  public getUsers(): Promise<any[]> {
    return this.users.send<any[], string>('usersGetAll', 'Michael').toPromise();
  }
}
