import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadMediaRoutingModule } from './upload-media-routing.module';
import { UploadMediaComponent } from './upload-media.component';
import { SingleUploadComponent } from './single-upload/single-upload.component';
import { MultipleUploadComponent } from './multiple-upload/multiple-upload.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UploadMediaComponent,
    SingleUploadComponent,
    MultipleUploadComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UploadMediaRoutingModule
  ]
})
export class UploadMediaModule { }
