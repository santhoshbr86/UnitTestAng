import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:4000/user';
  constructor(private http: HttpClient) { }

  saveUser(user): Observable<any> {
    return this.http.post(this.url, user);
  }
  isLoggedIn(): boolean {
    return true;
  }
}
