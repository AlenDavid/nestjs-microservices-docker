import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getters() {
    return this.appService.getHello();
  }

  @Get('/books')
  async getBooks() {
    return this.appService.getBooks();
  }

  @Get('/users')
  async getUsers() {
    return this.appService.getHello();
  }
}
