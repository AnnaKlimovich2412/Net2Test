import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignInComponent } from './modules/sign-in/sign-in.component';
import {RouterModule, Routes} from "@angular/router";
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { UsersComponent } from './modules/users/users.component';
import {AuthGuard} from "./guard/auth.guard";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'users',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'sign-in',
        loadChildren: () => import('./modules/sign-in/sign-in.module').then(m => m.SignInModule),
      },
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      {
        path: '**',
        redirectTo: 'sign-in',
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainLayoutComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
