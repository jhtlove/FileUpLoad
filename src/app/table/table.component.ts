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

  cols: any[] = [
    {
      header: '序号',
      field: ''
    },
    {
      header: '文件名',
      field: 'fileName'
    },
    {
      header: '标题',
      field: 'title'
    },
    {
      header: '上传日期',
      field: 'upLoadDate'
    },
    {
      header: '大小',
      field: 'size'
    },
    {
      header: '文件类型',
      field: 'fileType'
    },
    {
      header: '下载',
      field: 'downloadLink'
    }
  ];

  files: FileInfo[];

  // fileFilterControl: FormControl = new FormControl();

  keyWord: string;


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

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
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
    // 暂时没用到的过滤
    // this.fileFilterControl.valueChanges
    //   .pipe(debounceTime(500))
    //   .subscribe(value => this.keyWord = value);


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
