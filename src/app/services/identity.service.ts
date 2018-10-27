import { Iuser, Role } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
user: Iuser | undefined;
onChange: EventEmitter <Iuser | undefined> = new EventEmitter <Iuser | undefined>();
user_data: Iuser[] = [
{
userName: 'David',
password: 'prueba',
name: 'David Vera',
role: Role.user
},
{userName: 'Davis',
password: 'prueba2',
name: 'Davis Vargas',
role: Role.admin
}];
autenticate(user: string, password: string): Observable<Iuser> {
const ans = this.user_data.find(u => u.userName === user && u.password === password);
if (ans) {localStorage.setItem('user', JSON.stringify(ans));
this.user = {...ans};
}
return of (ans);
}
getCurrentUser(): Iuser | undefined {
return this.user;
}
isAuthenticated(): boolean {
  return this.user ? true : false;
}
loadUser(): void {
  this.user = JSON.parse(localStorage.getItem('user'));
}
clearUser() {
  this.user_data = undefined;
  this.onChange.emit(this.user);
}
eraseUser() {
  localStorage.removeItem('user');
}
logOut() {
  this.clearUser();
  this.eraseUser();
}
  constructor() {
    this.loadUser();
  }
}
