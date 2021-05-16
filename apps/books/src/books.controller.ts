import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BooksService } from './books.service';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  
  @MessagePattern('booksGetAll')
  @Get()
  getBooks(): Book[] {
    return this.booksService.getAll();
  }
}
