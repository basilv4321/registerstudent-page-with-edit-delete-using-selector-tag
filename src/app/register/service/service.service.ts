import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  subject$a:any=new Subject()

  register:any=[
    {
    name:"john",
    age:19,
    place:"kochi",
    gender:"Male"
  },
  {
    name:"ram",
    age:18,
    place:"ernakulam",
    gender:"Male"
  }
]

registerObj(obj:any){
  this.register.push(obj)
    this.subject$a.next(obj)
  }

editObj(index:any,no:any,obj:any){
  this.register.splice(index,no,obj)
}

delete(index:any){
  this.register.splice(index,1)
}

getData(){
  this.register.map((n:any)=>{
    this.subject$a.next(n)
  })
}
}
