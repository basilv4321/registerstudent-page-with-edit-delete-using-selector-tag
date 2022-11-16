import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  reg:any=[]
  register:any
  @Output() myNewRegister=new EventEmitter<any>();
  @Input('myRegister') registerinput:any

  editIndex:any
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getData()
  }

  ngOnChanges(){
    this.service.subject$a.subscribe(
      {
        next: (val:any)=>{
          this.reg.push(val)
        }
      }
    )
    this.register=this.registerinput
  }

  delete(i:any){
    this.myNewRegister.emit(
      {
        index:i,
        function:"delete"
      }
    )
    this.reg=this.service.register
  }
  edit(e:any){
    this.myNewRegister.emit(
      {
        index:e,
        function:"edit"
      }
    )
    this.reg=this.service.register
  }

  registerfn(){
    this.myNewRegister.emit(this.register)
  }
  
}
