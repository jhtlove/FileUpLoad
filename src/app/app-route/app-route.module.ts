import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../guard/login.guard';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';
import { TableComponent } from 'src/app/table/table.component';
import { Test1Component } from 'src/app/test1/test1.component';
import { Test2Component } from 'src/app/test2/test2.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [LoginGuard],  // 进入 用户 主页 要通过认证
    children: [
      {
        path: '',
        component: TableComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'test1',
        component: Test1Component
      },
      {
        path: 'test2',
        component: Test2Component
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]  // 必须exports
})
export class AppRouteModule { }
