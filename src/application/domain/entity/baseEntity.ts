import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity{

  @PrimaryGeneratedColumn()
  id:number=-1

  @Column()
  statut:string

}