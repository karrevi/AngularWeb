import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  constructor(
    public userService: UserService,
    public router: Router ){ }

  ngOnInit(): void { }

logOut(){
  localStorage.removeItem('authToken');
  this.userService.setUser({});
  this.router.navigate(['']);
  location.reload();
}
}
