import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
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
export class TableComponent implements OnInit, OnDestroy, AfterViewInit {

  display = false;

  files: FileInfo[] = [
    new FileInfo('css权威指南.txt', '2018-08-22 17:24', 'css权威指南', 1.5, 'txt', 'test'),
    new FileInfo('html权威指南.pdf', '2018-08-21 17:24', 'html权威指南', 1.5, 'pdf', 'test'),
    new FileInfo('javascritp权威指南.pdf', '2018-08-23 17:24', 'javascritp权威指南', 1.5, 'pdf', 'test')
  ];

  fileFilterControl: FormControl = new FormControl();

  keyWord: string;

  constructor(public tableService: TableService, public loginService: LoginService) {
  }

  // ngOnInit ngAfterContentInit 执行 在 ngFor 组织模板之前？？？
  ngOnInit() {

     this.getDatas();

    this.fileFilterControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => this.keyWord = value);

    $('#input-id').fileinput({
      uploadUrl: 'test/upload',
      language: 'zh',
      // uploadAsync:false, // 是否异步上传;异步：同时发送多个请求
      maxFileCount: 5,
      maxFileSize: 3000,
      previewFileType: 'any'
    });
  }

  ngAfterViewInit() {
    $('#example1').DataTable(
      {
        // 'ajax': 'data/table',

        // "columns": [
        //   {"data": "time"},
        //   {"data": "filename"},
        //   {"data": "cz"}
        // ],

        // columnDefs: [
        // {
        //     targets:0,
        //     visible:false //隐藏第1列
        // },
        // {
        //   targets: 1,
        //   // 逐行操作
        //   render: function (data, type, row) {
        //     // data：该列数据，row：该行数据 {filename:"",time:"",cz:""}
        //     return '<a download="" href="' + row.filename + '">' + row.filename + '</a>';
        //   }
        // },
        //   {
        //     targets: 5,
        //     // 逐行操作
        //     render: function (data, type, row) {
        //       // data：该列数据，row：该行数据 {filename:"",time:"",cz:""}
        //       // return '<a (click)="delFile(' + "\'" + row.filename + "\'" + ')">下载</a>';
        //       return '<a onclick="delFile()">下载</a>';
        //     }
        //   }
        // ],
        'paging': true,
        'lengthChange': false,
        'searching': true,
        'ordering': true,
        'info': true,
        'autoWidth': false,
        'language': {
          'search': '搜索文件',
          'lengthMenu': '每页 _MENU_ 条记录',
          'zeroRecords': '没有找到记录',
          'info': '第 _PAGE_ 页 ( 总共 _PAGES_ 页 )',
          'infoEmpty': '无记录',
          'infoFiltered': '(从 _MAX_ 条记录过滤)',
          'paginate': {
            'previous': '上一页',
            'next': '下一页'
          }
        }
      }
    );
  }

  ngOnDestroy() {
    this.loginService.logOut();
  }

  getDatas(): void {
    this.tableService.getDatas().subscribe(data => this.files = data);
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
