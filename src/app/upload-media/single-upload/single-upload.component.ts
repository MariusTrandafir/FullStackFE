import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-single-upload',
  templateUrl: './single-upload.component.html',
  styleUrls: ['./single-upload.component.css']
})
export class SingleUploadComponent implements OnInit {
  singleUploadForm: FormGroup;
  submitted: boolean;
  completed: boolean;
  loading: boolean;
  selectedFile: File = null;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private mediaService: MediaService,
    private changeDefector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.singleUploadForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      tags: [''],
      effects: ['']
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.selectedFile = <File>event.target.files[0];
    }
  }
  get f() { return this.singleUploadForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.singleUploadForm.invalid) {
      return;
    }
    this.loading = true;
    this.mediaService.upload(this.singleUploadForm.value, this.selectedFile)
      .subscribe(
        data => {
          this.alertService.success('Upload successful', true);
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
