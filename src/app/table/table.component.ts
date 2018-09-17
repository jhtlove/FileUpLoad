import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { TableService } from './table.service';
import { LoginService } from '../service/login.service';
import { debounceTime } from 'rxjs/operators';
// import * as $ from 'jquery';
// import * as bootstrap from "bootstrap";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  head = '内外网文件转换';
  subhead = '个人文件';

  display = false;

  files: FileInfo[];

  fileFilterControl: FormControl = new FormControl();

  keyWord: string;

  sortField: string;

  isAsc: boolean;

  sortClass = 'fa fa-unsorted';

  uploadedFiles: any[] = [];

  constructor(public tableService: TableService, public loginService: LoginService) {
  }

  // DoCheck
  // ngDoCheck() {
  //   // Called every time that the input properties of a component or a directive are checked.
  //   // Use it to extend change detection by performing a custom check.
  //   // Add 'implements DoCheck' to the class.
  //   console.log('doCheck!');
  // }

  // ngOnInit ngAfterContentInit 执行 在 ngFor 组织模板之前？？？
  ngOnInit() {
    this.getDatas();

    this.fileFilterControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => this.keyWord = value);
  }

  ngOnDestroy() {
    this.loginService.logOut();
  }

  getDatas(): void {
    this.tableService.getDatas().subscribe(data => {

      // tslint:disable-next-line:prefer-const
      let isSuccesed = data.state;
      if (!isSuccesed) {
        alert('查询个人文件信息失败：' + data.error);
      } else {
        this.files = data.row01; // 赋值后 页面拿数据组织界面 *ngFor 然后再触发 dataTable
      }
    }
    );
  }

  find() {
    this.getDatas();
  }

  toggle(field: string) {
    this.sortField = field;
    if (this.sortClass === 'fa fa-unsorted') {
      // 点一下升序
      this.sortClass = 'fa fa-sort-asc';
      this.isAsc = true;
    } else if (this.sortClass === 'fa fa-sort-asc') {
      this.sortClass = 'fa fa-sort-desc';
      this.isAsc = false;
    } else {
      this.sortClass = 'fa fa-sort-asc';
      this.isAsc = true;
    }
  }
}

export class FileInfo {
  constructor(
    public SWJM: string,
    public SCRQ: string,
    public STITLE: string,
    public WJDX: string,
    public WJLX: string,
    public SPATH: string
  ) {
  }
}
