import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module.js';
import { OrdersService } from './orders.service.js';

@Module({
  imports: [UsersModule],
  providers: [OrdersService],
})
export class OrdersModule {}
