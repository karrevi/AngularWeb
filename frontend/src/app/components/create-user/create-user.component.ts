import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public validateForm: FormGroup;
  successMsg: string;
  errorMsg: string;
  

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email,Validators.required]],
      password: [null, [Validators.required,]],
      username: [null, [Validators.required]],
    });
  }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    }
    else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  // createuser(createuserForm: NgForm) {
  //   if (createuserForm.valid) {
  //     const user = createuserForm.value;
  //     this.userService.createuser(user)
  //       .subscribe(
  //         (res: HttpResponse<object>) => {
  //           this.successMsg = res[' message'];
  //           setTimeout(() => {
  //             this.router.navigate(['micuenta']);
  //           }, 2000);
  //         },
  //         (error: HttpErrorResponse) => {
  //           this.errorMsg = error[' error'][' message'];
  //           setTimeout(() => this.errorMsg = '', 2000);
  //         }
  //       );
  //   }
  // }
}