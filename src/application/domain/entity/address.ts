import { Column } from 'typeorm';

export class Address{

  @Column()
  primaryAddress:string=""

  @Column()
  secondaryAddress:string=""

  primaryEmail:string=""

}