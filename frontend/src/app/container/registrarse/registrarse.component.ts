import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {
  public validateForm: FormGroup;
  public errorMsg: string;
  public successMsg: string;

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required,
      ]],
      username: [null, [Validators.required]],
    });
}
confirmationValidator = (control: FormControl): { [ s: string]: boolean } =>{
  if(!control.value) {
    return { required:true };
  }
  else if (control.value !== this.validateForm.controls.password.value){
    return {confirm: true, error: true};
  }
  return{};
};
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
            this.errorMsg = error[' error'][' message'];
            setTimeout(() => this.errorMsg = '', 2000);
          }
        );
    }
  }
}
