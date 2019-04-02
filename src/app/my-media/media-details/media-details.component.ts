import { Component, OnInit } from '@angular/core';
import { Media } from 'src/app/models/media.model';
import { MediaService } from 'src/app/services/media.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent implements OnInit {
  media: Media;
  pictureUpdateForm: FormGroup;
  readonly: Boolean = true;
  profileMedia : Observable<Media>;

  constructor(
    private mediaService: MediaService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthService
  ) { }

  ngOnInit() {
    this.media = this.mediaService.currentMedia;
    console.log ("LALALA"+ this.media.likes);
    if (this.media.username == this.authenticationService.currentUserValue.username) {
      this.readonly = false;
    }
    this.profileMedia = this.mediaService.getProfileImage(this.media.username);
    this.pictureUpdateForm = this.formBuilder.group({
      title: [this.media.title, Validators.required],
      description: [this.media.description],
      tags: [this.media.tags],
      fileDownloadUri: [this.media.fileDownloadUri],
      filename: [this.media.fileName],
      likes: [this.media.likes]
    });
  }
  onSubmit() {

  }

}
