import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserService} from "./user.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  login(user: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/Account/Login`, user).pipe(
      tap(res => {
        if (res.success) {
          this.userService.isLoggedIn$.next(true);
        }
      })
    );
  }

}
