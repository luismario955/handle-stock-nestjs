import { Module } from '@nestjs/common';
import { DailyTasksService } from './daily-tasks.service';
import { DailyTasksController } from './daily-tasks.controller';

@Module({
  controllers: [DailyTasksController],
  providers: [DailyTasksService],
})
export class DailyTasksModule {}
