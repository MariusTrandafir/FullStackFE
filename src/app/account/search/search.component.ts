import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from 'src/app/models/media.model';
import { AuthService } from 'src/app/services/auth.service';
import { MediaService } from 'src/app/services/media.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searched = false;
  medias : Observable<Media[]>;
  searchForm: FormGroup;
  constructor(
    private authenticationService: AuthService,
    private mediaService: MediaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
    searchText: ['', Validators.required],  
    });
  }

  onSubmit() {
    this.medias = this.mediaService.search(this.searchForm.controls.searchText.value);
    this.searched = true;
  }
  moveToImage(media: Media) {
    this.mediaService.currentMedia = media;
    this.router.navigate(['/media-details']);

  }

}
