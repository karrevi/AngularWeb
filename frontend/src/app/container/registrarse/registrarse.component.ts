import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {
  public errorMsg: string;
  public successMsg: string;

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }
  registrarse(registrarseForm: NgForm) {
    if (registrarseForm.valid) {
      const user = registrarseForm.value;
      this.userService.registrarse(user)
      .subscribe(
        (res: HttpResponse<object>) => {
          this.successMsg = res[' message'];
          setTimeout(() => {
            this.router.navigate(['micuenta']);
                    }, 2000);
        },
        (error: HttpErrorResponse) => {
          this. errorMsg = error[' error'][' message'];
          setTimeout(() =>  this.errorMsg = '' , 2000);
        }
      );
    }
  }
}
