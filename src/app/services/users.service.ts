import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../models/user.model";

// List Users
// app/User/List
// Get a user.model.ts
// app/User/Get
// Create a user.model.ts
// app/User/Create
// Update a user.model.ts
// app/User/Update


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getListUsers(): Observable<User[]> {
    return this.http.post<User[]>(`${environment.apiUrl}/User/List`, {})
  }

}
