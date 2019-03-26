import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MediaService } from '../services/media.service';
import { Media } from '../models/media.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  media: Observable<Media>;

  constructor(
    private authenticationService: AuthService,
    private mediaService: MediaService,
  ) { }

  ngOnInit( ) {
    this.media = this.mediaService.getProfileImage(this.authenticationService.currentUserValue.username);
  }
  getProfileImage(username: String) {
  this.media = this.mediaService.getProfileImage(username);
  }
}
