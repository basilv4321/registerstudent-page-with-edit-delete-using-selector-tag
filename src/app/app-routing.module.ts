import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewtaskComponent } from './register/newtask/newtask.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  {path:"",component:RegisterComponent},
  {path:"task",component:NewtaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
