import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLoggedIn$ = new BehaviorSubject(false);

  get userLoggedInStatus(): boolean {
    return this.isLoggedIn$.getValue();
  }

}
