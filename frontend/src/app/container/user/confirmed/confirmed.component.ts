import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: []
})
export class ConfirmedComponent implements OnInit {

  email: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService) { }

  ngOnInit(): void {
    const token = this.route.snapshot.params.token;
    this.userService.getUserInfo(token)
      .subscribe(
        res => this.userService.setUser(res)
      )
    localStorage.setItem('authToken', token);
    setTimeout(() => {
      this.router.navigate(['']);
    }, 3000);
  }

}
