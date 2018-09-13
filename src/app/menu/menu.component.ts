import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selectedId = 0;
  menus: MenuItem[];
  userName = '';
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.menus = [
      new MenuItem('内外网文件转换', './table'),
      new MenuItem('测试1', './test1'),
      new MenuItem('测试2', './test2')
    ];
    // this.userName = this.loginService.getUserName();
    this.userName = sessionStorage.getItem('currentUser');
  }
  select(id: number) {
    this.selectedId = id;
  }

}

export class MenuItem {
  constructor(public name: string,
    public url: string) {
  }
}
