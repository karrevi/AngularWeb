import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.scss']
})
export class MicuentaComponent implements OnInit {
  public user: any = {
    username: '',
    password: '',
  };
  public errorMsg: string;
  public successMsg: string;

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }
  micuenta(loginForm: NgForm) {
   // event.preventDefault();
    const user = loginForm.value;
    this.userService.micuenta(user)
    .subscribe(
        (res: HttpResponse<object>) => {
          console.log(res);
          const admins = ['superAdmin', 'admin', 'dios'];
          const redirectRoute = admins.includes(res['user']['role']) ? '/' : '/';
          this.successMsg = res['message'];
          this.userService.setUser(res['user']);
          this.userService.setToken(res['token']);
          localStorage.setItem('authToken', res['token']); setTimeout(() => this.router.navigate([redirectRoute]) , 2500);
        },
        (error: HttpErrorResponse) => {
          this.errorMsg = error.error.message;
          setTimeout(() => this.errorMsg = '', 2500);
        }
      );
  }

}
