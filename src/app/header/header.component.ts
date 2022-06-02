import { Component, OnInit } from '@angular/core';
//import { faUser } from '@fortawesome/free-solid-svg-icons';
//import { AuthService } from '../auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //faUser = faUser;
  isLoggedIn: boolean = false;
  username: string = "";

  constructor(private router: Router) { }

  ngOnInit() { }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile/' + this.username);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
  }

}