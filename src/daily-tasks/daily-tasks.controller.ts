import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailyTasksService } from './daily-tasks.service';
import { CreateDailyTaskDto } from './dto/create-daily-task.dto';
import { UpdateDailyTaskDto } from './dto/update-daily-task.dto';

@Controller('daily-tasks')
export class DailyTasksController {
  constructor(private readonly dailyTasksService: DailyTasksService) {}

  @Post()
  create(@Body() createDailyTaskDto: CreateDailyTaskDto) {
    return this.dailyTasksService.create(createDailyTaskDto);
  }

  @Get()
  findAll() {
    return this.dailyTasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyTasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyTaskDto: UpdateDailyTaskDto) {
    return this.dailyTasksService.update(+id, updateDailyTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyTasksService.remove(+id);
  }
}
