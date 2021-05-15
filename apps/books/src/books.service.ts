import { Injectable } from '@nestjs/common';

const books: Book[] = [{
  id: 1,
  author: 'David',
  title: 'Are sapiens humans? V.1'
},{
  id: 2,
  author: 'David',
  title: 'Are sapiens humans? V.2'
},{
  id: 3,
  author: 'Robson',
  title: 'Conspiracy against manly mans'
},{
  id: 4,
  author: 'David',
  title: 'Are sapiens humans? V.3'
}]

@Injectable()
export class BooksService {
  getAll(): Book[] {
    return books
  }
}
