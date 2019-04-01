import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:8079/user/user/auth`, { username, password })
      .pipe(map(user => {
        if (user.result && user.result.token) {
          localStorage.setItem('currentUser', JSON.stringify(user.result));
          this.currentUserSubject.next(user.result);

        }

        return user.result;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  register(user: User) {
    return this.http.post(`http://localhost:8079/user/user/signup`, user);
  }

  checkUsername(username: string) {
    return false;
  }

}
