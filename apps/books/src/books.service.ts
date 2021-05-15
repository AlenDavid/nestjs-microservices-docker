import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  getHello(name: string): string {
    return `Hello ${name}!`;
  }
}
