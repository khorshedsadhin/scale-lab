import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {
    console.log(`constructed`);
  }

  findAll() {
    return ['test', 'test2', 'test3'];
  }
}
