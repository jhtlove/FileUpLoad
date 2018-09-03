import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User = new User('', '');
  constructor() { }

  setUserInfo(user: User) {
    this.user.userName = user.userName;
    this.user.pwd = user.pwd;
  }

  getUserName(): string {
    return this.user.userName;
  }

  getUser(): User {
    return this.user;
  }

  doLogin(): boolean {
    if (this.user.userName === '01229' && this.user.pwd === '1') {
      return true;
    }
    return false;
  }

  logOut(): void {
    sessionStorage.removeItem('logSuccessed');
  }
}

export class User {
  constructor(public userName: string, public pwd: string) { }
}
