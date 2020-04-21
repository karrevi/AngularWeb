import { Component } from '@angular/core';
import { UserService } from './user.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public userService: UserService) { }

  ngOnInit() {
    const token: string = localStorage.getItem('authToken');
    if (token) {
      this.userService.getUserInfo(token)
        .subscribe(
          (res: HttpResponse<object>) => {this.userService.setUser(res);console.log(res)},
          (error: HttpErrorResponse) => {
            console.error(error);
            localStorage.removeItem('authToken');
          }
        )
    }
  }
}
