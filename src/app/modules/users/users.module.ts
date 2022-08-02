import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {UsersComponent} from "./users.component";

export const usersModuleRouting = [
  {
    path:'',
    component: UsersComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usersModuleRouting)
  ]
})
export class UsersModule { }
