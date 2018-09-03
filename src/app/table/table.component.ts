import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy, AfterViewInit, DoCheck, AfterViewChecked } from '@angular/core';
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

  display = false;

  files: FileInfo[];

  fileFilterControl: FormControl = new FormControl();

  keyWord: string;

  sortField: string;

  isAsc: boolean;

  sortClass = 'fa fa-unsorted';

  uploadedFiles: any[] = [];

  initFileUpload() {
    $('#input-id').fileinput({
      uploadUrl: 'test/upload',
      language: 'zh',
      // uploadAsync:false, // 是否异步上传;异步：同时发送多个请求
      maxFileCount: 5,
      maxFileSize: 3000,
      previewFileType: 'any'
    });
  }

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

    this.initFileUpload();

    this.fileFilterControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => this.keyWord = value);


  }

  ngOnDestroy() {
    this.loginService.logOut();
  }

  getDatas(): void {
    this.tableService.getDatas().subscribe(data => {
    
      let isSuccesed = data.state;
      if (!isSuccesed) {
        alert('查询个人文件信息失败：' + data.error);
      } else {
        this.files = data.row01; // 赋值后 页面拿数据组织界面 *ngFor 然后再触发 dataTable
      }
    }
    );
  }


  showDialog() {
    this.display = true;
    $('#fileupload-modal').modal('show');
  }

  find() {
    this.getDatas();
  }

  close() {
    this.display = false;
  }

  download() {
    console.log('下载');
  }

  delFile() {
    console.log('删除：');
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
