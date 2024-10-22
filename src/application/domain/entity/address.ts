import { Column } from 'typeorm';

export class Address{

  @Column()
  primaryAddress:string=""

  @Column()
  secondaryAddress:string=""

  @Column()
  primaryEmail:string=""

  @Column()
  secondaryEmail:string=""

  @Column()
  postalCode:string=""

  @Column()
  district:string=""

  @Column()
  borough:string=""

}