import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthService,
  ) { if (this.authenticationService.currentUserValue) { 
    this.authenticationService.logout();
    this.router.navigate(['/account/login']);
}}

  ngOnInit() {
  }

}
