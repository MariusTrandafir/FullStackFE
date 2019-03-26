import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadMediaComponent } from './upload-media.component';
import { SingleUploadComponent } from './single-upload/single-upload.component';
import { MultipleUploadComponent } from './multiple-upload/multiple-upload.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: UploadMediaComponent,
  children : [
    {path : '', redirectTo: 'single-upload'},
    {path : 'single-upload', component:SingleUploadComponent, canActivate: [AuthGuard]},
    {path : 'multiple-upload', component:MultipleUploadComponent, canActivate: [AuthGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadMediaRoutingModule { }
