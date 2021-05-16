import { Injectable } from '@nestjs/common';

const users: User[] = [
  {
    id: 1,
    name: 'David'
  },
  {
    id: 2,
    name: 'Anna'
  },
  {
    id: 3,
    name: 'Pedro'
  },
  {
    id: 4,
    name: 'Robson'
  }
]

@Injectable()
export class UsersService {
  getAllUsers(): User[] {
    return users
  }
}
