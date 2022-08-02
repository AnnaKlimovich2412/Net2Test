import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import { EmptyComponent } from './empty/empty.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyComponent,
    children: [
      {
        path: 'users',
        canActivate: [AuthGuard],
        loadChildren: () => import('app/modules/smer-dairy/smer-dairy.module').then(m => m.СоздайНовыйМодуль),
      },
      {
        path: 'sign-in',
        loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.МодульДляЛогина),
      },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      {
        path: '**',
        redirectTo: 'users',
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmptyComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
