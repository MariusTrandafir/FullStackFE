import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMediaRoutingModule } from './my-media-routing.module';
import { MediaDetailsComponent } from './media-details/media-details.component';

@NgModule({
  declarations: [MediaDetailsComponent],
  imports: [
    CommonModule,
    MyMediaRoutingModule
  ]
})
export class MyMediaModule { }
