import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Media } from '../models/media.model';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient, private authenticationService: AuthService) { }

  upload(media: Media, file: File) {
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("title", media.title);
    formData.append("description", media.description);
    formData.append("tags", media.tags);
    formData.append("username", this.authenticationService.currentUserValue.username);
    return this.http.post(`http://localhost:8079/media/media/uploadFile`, formData);
  }

  getProfileImage (username: String): Observable<any> {
    let requestUrl = 'http://localhost:8079/media/media/profileImage/'+username;
    return this.http.get(requestUrl)
  }
  getImages(username: String): Observable<any> {
    let requestUrl = 'http://localhost:8079/media/media/myImages/'+username;
    return this.http.get(requestUrl)
  }
}
