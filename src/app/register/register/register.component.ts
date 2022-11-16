import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  registerForm!:FormGroup;
  editIndex:any
  edit1:boolean=false
  submitBoolean:boolean=false


  register:any=this.service.register

  constructor(private _fb:FormBuilder,private service:ServiceService) { }

  ngOnInit(): void {
    this.registerForm=this._fb.group({
      name:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      age:[null,[Validators.required,Validators.min(18),Validators.max(58)]],
      place:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      gender:[null,[Validators.required]]
    })
  }

  ngOnChanges(){
  }

  submit(){
    if(this.registerForm.valid){
      if(this.edit1){
        this.service.editObj(this.editIndex,1,this.registerForm.value)
          this.edit1=false
          this.registerForm.reset()

      }
      else{
        this.service.registerObj(this.registerForm.value)
        this.registerForm.reset()
      }
    }
    else{
      this.submitBoolean=true

    }
  }
  delete(d:any){
    this.service.delete(d)
  }
  edit(e:any){
    this.editIndex=e
    console.log( this.editIndex);
    console.log(this.register);
    
    let obj=this.register[this.editIndex]
    this.registerForm.setValue(obj)
    this.edit1=true
  }

  get re(){
    return this.registerForm.controls
  }
  change(){
    this.submitBoolean=false
  }
  childGetfn(event:any){
    if(event.function=="delete"){
      this.delete(event.index)
    }
    else if(event.function=="edit"){
      this.edit(event.index)
    }
  }

}
