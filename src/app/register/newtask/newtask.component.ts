import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  palindromeData:string="";
  

  palindrome(){
    let f=this.palindromeData.split("").reverse().join("")
    console.log(this.palindromeData);
    if(this.palindromeData==f){
        alert("the string is palindrome")
    }
    else{
      alert("the string is not palindrome")
    }
  }

}
