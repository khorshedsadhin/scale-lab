import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('slow-wait')
  async slowWait() {
    // database/outside e api wait er immitation
    await new Promise((r) => setTimeout(r, 3000));
    return 'waited';
  }

  @Get('slow-cpu')
  async slowCpu() {
    // cpu burn for 3 seconds
    const end = Date.now() + 3000;
    while(Date.now() < end) {}
    return 'burned';
  }
}
