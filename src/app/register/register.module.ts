import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {ScrollerModule} from 'primeng/scroller';
import { NewtaskComponent } from './newtask/newtask.component';
import { MydirectiveDirective } from './mydirective.directive';
import { ListComponent } from './list/list.component';
import {InputTextModule} from 'primeng/inputtext';
import { ServiceService } from './service/service.service';

@NgModule({
  declarations: [
    RegisterComponent,
    NewtaskComponent,
    MydirectiveDirective,
    ListComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    MatRadioModule,
    ScrollerModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  exports: [
    RegisterComponent
  ],
  providers: [
    ServiceService
  ]
})
export class RegisterModule { }
