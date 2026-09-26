import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class OrdersService {
  constructor(private readonly usersService: UsersService) {}
}
