import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SignInComponent} from "./sign-in.component";

export const authSignInRoutes = [
  {
    path:'',
    component: SignInComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authSignInRoutes)
  ]
})
export class SignInModule { }
