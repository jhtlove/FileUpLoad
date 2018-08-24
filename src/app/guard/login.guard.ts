import { LoginService, User } from './../service/login.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class LoginGuard implements CanActivate {

    // private loginService: LoginService = new LoginService(); // 不能使用依赖注入方式？？
    constructor(private loginService: LoginService) { }

    canActivate() {
        // 直接刷新 重新加载页面 路由守卫？？？
        if (sessionStorage.getItem('logSuccessed') === 'true') {
            return true;
        }
        return false;


    }
}
