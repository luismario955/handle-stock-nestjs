import { BaseEntity } from '../../entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class DailyTask extends BaseEntity{

  designation:string=""

  dateTasks:Date

  @Column("time")
  hourBegin:Date

  @Column("time")
  hourEnd:Date

  @Column("text")
  description:string

  @Column("text")
  reason:string

}
