import { Column } from 'typeorm';

export class Contact {

   @Column()
   phone: string = ""

   @Column()
   mobile: string = ""

   @Column()
   fax: string = ""

   @Column()
   email: string = ""
  
}