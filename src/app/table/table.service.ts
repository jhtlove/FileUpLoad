import { LoginService } from './../service/login.service';
import { Injectable } from '@angular/core';
import { FileInfo } from './table.component';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  private tableUrl = 'table';
  public subject: Subject<FileInfo> = new Subject<FileInfo>();

  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  getDatas(): Observable<FileInfo[]> {
    return this.http.get<FileInfo[]>(this.tableUrl,{params:{}});

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
