import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @MessagePattern('usersGetAll')
  @Get()
  getHello(who: string): User[] {
    return this.usersService.getAllUsers();
  }
}
