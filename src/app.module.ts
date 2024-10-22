import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyTasksModule } from './daily-tasks/daily-tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '31.207.34.148',
      port: 3306,
      username: 'postgres',
      password: '$2y$10$iWcHOgNxx0pajLv6Ohe4tOaekKAWg23Uo6wKQrYiWsOji316cY3bi',
      database: 'life_app_nest',
      entities: [],
      synchronize: true,
    }),
    DailyTasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
