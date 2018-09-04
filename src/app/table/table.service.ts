import { LoginService } from './../service/login.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import * as express from 'express';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private tableUrl = '/EzaRest/grwj/selectWjml.do?ygid=' + sessionStorage.getItem('currentUser');


  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  getDatas(): Observable<any> {
    return this.http.get<any>(this.tableUrl);
    // 向后台post数据的写法如下
    // let data = new URLSearchParams();
    // data.append('email', user.email);
    // data.append('password', user.password);
    // return this.http.post(this.userRegisterURL,data);

    // return this.http
    //   .get(this.tableUrl)
    //   .map((response: Response) => {
    //     let user = response.json();
    //     // localStorage.setItem('currentUser', JSON.stringify(user));
    //     this.subject.next(user);
    //   });
  }
}
