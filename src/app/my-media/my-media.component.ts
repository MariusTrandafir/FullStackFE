import { Component, OnInit, Input } from '@angular/core';
import { Media } from '../models/media.model';
import { AuthService } from '../services/auth.service';
import { MediaService } from '../services/media.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-media',
  templateUrl: './my-media.component.html',
  styleUrls: ['./my-media.component.css']
})
export class MyMediaComponent implements OnInit {
  @Input()
  username: string;

  medias : Observable<Media[]>;
  constructor(
    private authenticationService: AuthService,
    private mediaService: MediaService,
  ) { }

  ngOnInit() {
    if (this.username == null) {
    this.medias = this.mediaService.getImages(this.authenticationService.currentUserValue.username);
    } else {
    this.medias = this.mediaService.getImages(this.username);
    }
  }

}
