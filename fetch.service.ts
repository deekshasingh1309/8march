import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }
  data: object = [
    {
      id : 1 ,
      firstname : ' Deeksha ',
      lastname : 'Singh',
      email : 'ds1309@gmail.com',
      phone_number : 9999123456,
      date_of_birth : ' 07/10/1997',
      designation : 'Trainee'
  },
  {
    id : 2 ,
    firstname : ' Shivaani ',
    lastname : 'Choudhary',
    email : 'cs12@gmail.com',
    phone_number : 7812738455,
    date_of_birth : ' 12/01/1992',
    designation : 'Project Manager'
  },
  {
    id : 3 ,
    firstname : ' Tom ',
    lastname : 'Jacky',
    email : 'tml@gmail.com',
    phone_number : 9915380000,
    date_of_birth : ' 01/06/1990',
    designation : 'Business analyst'
  },
  {
    id : 4 ,
    firstname : ' Mayank ',
    lastname : 'Gupta',
    email : 'monv@gmail.com',
    phone_number : 8989738423,
    date_of_birth : '28/09/1982',
    designation : 'Project Manager'
  },
  {
    id : 5 ,
    firstname : ' Asha ',
    lastname : 'Shrama',
    email : 'asha@gmail.com',
    phone_number : 9772734492,
    date_of_birth : ' 13/09/1995',
    designation : 'Software Engineer'
  },
  {
    id : 6 ,
    firstname : ' Aisha ',
    lastname : 'Singh',
    email : 'ashs@gmail.com',
    phone_number : 9772734492,
    date_of_birth : ' 13/02/1988',
    designation : 'Engineer'
  }
] ;
setData( content){
  content = this.data ;
}
getData(){
  return this.data;
}
getColumns() {
  return Object.keys(this.data[0]);
}
}
