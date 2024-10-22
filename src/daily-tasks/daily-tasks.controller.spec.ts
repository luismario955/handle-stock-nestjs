import { Test, TestingModule } from '@nestjs/testing';
import { DailyTasksController } from './daily-tasks.controller';
import { DailyTasksService } from './daily-tasks.service';

describe('DailyTasksController', () => {
  let controller: DailyTasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyTasksController],
      providers: [DailyTasksService],
    }).compile();

    controller = module.get<DailyTasksController>(DailyTasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
