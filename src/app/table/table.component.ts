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
export class TableComponent implements OnInit, OnDestroy, AfterViewChecked {

  display = false;

  files: FileInfo[];
  // = [
  //   new FileInfo('css权威指南.txt', '2018-08-22 17:24', 'css权威指南', 1.5, 'txt', 'test'),
  //   new FileInfo('html权威指南.pdf', '2018-08-21 17:24', 'html权威指南', 1.5, 'pdf', 'test'),
  //   new FileInfo('javascritp权威指南.pdf', '2018-08-23 17:24', 'javascritp权威指南', 1.5, 'pdf', 'test')
  // ];

  fileFilterControl: FormControl = new FormControl();

  keyWord: string;

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

    // 暂时没用到的过滤
    // this.fileFilterControl.valueChanges
    //   .pipe(debounceTime(500))
    //   .subscribe(value => this.keyWord = value);

    $('#input-id').fileinput({
      uploadUrl: 'test/upload',
      language: 'zh',
      // uploadAsync:false, // 是否异步上传;异步：同时发送多个请求
      maxFileCount: 5,
      maxFileSize: 3000,
      previewFileType: 'any'
    });
  }

  // ngAfterViewInit() {
  // }

  ngAfterViewChecked() {
  }

  ngOnDestroy() {
    this.loginService.logOut();
  }

  getDatas(): void {
    this.tableService.getDatas().subscribe(data => {
      this.files = data; // 赋值后 页面拿数据组织界面 *ngFor 然后再触发 dataTable
    }

    );
  }


  showDialog() {
    // this.display = true;
    $('#fileupload-modal').modal('show');
  }

  find() {

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
}

export class FileInfo {
  constructor(
    public fileName: string,
    public upLoadDate: string,
    public title: string,
    public size: number,
    public fileType: string,
    public downloadLink: string
  ) {
  }
}
