import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userName = '';
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    // this.userName = this.loginService.getUserName();
    this.userName = sessionStorage.getItem('currentUser');
  }

}

export class MenuItem {
  constructor() {

  }
}
