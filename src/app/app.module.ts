import { LoginGuard } from './guard/login.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AppRouteModule } from './app-route/app-route.module';
import { LoginService } from './service/login.service';
import { FileFilterPipe } from './table/file-filter.pipe';
import { FileSortPipe } from './table/file-sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    TableComponent,
    FileUploadComponent,
    LoginComponent,
    UserComponent,
    FileFilterPipe,
    FileSortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // 处理表单的模块
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRouteModule,  // 必须引入
    ModalModule.forRoot()
  ],
  providers: [LoginService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}
