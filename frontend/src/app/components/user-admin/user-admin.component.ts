import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
  public users;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll()
    .subscribe(res => {
       this.users = res;},
       error => console.log(error));
  }
  borrarUser(userId){
    console.log(userId);
  }

}
