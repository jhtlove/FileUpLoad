import { LoginService, User } from '../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User('', '');
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    let inputElem: any = $('#rememberMe');
    inputElem.iCheck({

      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%'  // optional
    });
    let userName = localStorage.getItem('currentUser');
    let pwd = localStorage.getItem('currentPwd');
    if (userName) {
      this.user.userName = userName;
    }
    if (pwd) {
      this.user.pwd = pwd;
    }
  }

  onLogin() {
    const checkBox: any = document.getElementById('rememberMe');
    const isChecked = checkBox.checked;

    this.loginService.setUserInfo(this.user);
    const res = this.loginService.doLogin();
    if (res === true) {
      if (isChecked) {
        localStorage.setItem('currentUser', this.user.userName);
        localStorage.setItem('currentPwd', this.user.pwd);
      }
      sessionStorage.setItem('logSuccessed', 'true');
      sessionStorage.setItem('currentUser', this.user.userName);
      this.router.navigateByUrl('user');
      window.location.reload();
    }
  }



  remember() {
    console.log('remember me.');
  }
}
