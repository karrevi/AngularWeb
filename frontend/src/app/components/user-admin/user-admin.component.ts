import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
  public users;
  public successMsg = "";

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe(res => {
        this.users = res;
      },
        error => console.log(error));
  }

  borrarUser(userId) {
    const token = localStorage.getItem('authToken');
    console.log(userId);
    this.userService.deleteUser(userId, token)
      .subscribe(
        (res) => {
          this.successMsg = res['message'];
          setTimeout(() => {
            this.successMsg = "";
          }, 2000);
          this.userService.getAll()
            .subscribe(res => {
              this.users = res;
            },
              error => console.log(error));
        }
      )
  }

}
