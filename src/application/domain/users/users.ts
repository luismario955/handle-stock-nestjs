import { Address } from '../entity/address';
import { BaseEntity } from '../entity/baseEntity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Contact } from '../entity/contact';

@Entity()
export class Users extends BaseEntity{

  @Column()
  lastname:string=""

  @Column()
  firstname:string=""

  @Column()
  username:string=""

  @Column()
  password:string

  @Column()
  firstConnection:boolean=false

  @Column()
  locked:boolean=false

  @Column()
  expired:boolean=false

  @Column()
  enabled:boolean=false

  @Column(()=>Address)
  address:Address

  @Column(()=>Contact)
  contact:Contact

  @ManyToOne(type => Users)
  owner:Users

}