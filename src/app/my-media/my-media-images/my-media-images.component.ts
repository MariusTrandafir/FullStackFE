import { Component, OnInit, Input } from '@angular/core';
import { Media } from 'src/app/models/media.model';
import { MediaService } from 'src/app/services/media.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-media-images',
  templateUrl: './my-media-images.component.html',
  styleUrls: ['./my-media-images.component.css']
})
export class MyMediaImagesComponent implements OnInit {
  @Input()
  media : Media;
  constructor(
    private router: Router,
    private mediaService: MediaService
  ) { }

  ngOnInit() {
  }
  moveToImage() {
    this.mediaService.currentMedia = this.media;
    this.router.navigate(['/media-details']);
  }

}
