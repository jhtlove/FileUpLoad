import { LoginGuard } from './guard/login.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
// import { from '@types/bootstrap';
// import * as bootstrap from "bootstrap";

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
    FileFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // 处理表单的模块
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule,
    AppRouteModule  // 必须引入
  ],
  providers: [LoginService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}
