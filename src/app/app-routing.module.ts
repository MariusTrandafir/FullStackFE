import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMediaComponent } from './my-media/my-media.component';
import { FollowingComponent } from './following/following.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'account',
    loadChildren: './account/account.module#AccountModule' },
  { path: 'my-media', component: MyMediaComponent, canActivate: [AuthGuard] },
  { path: 'upload-media',
    loadChildren: './upload-media/upload-media.module#UploadMediaModule',
     canActivate: [AuthGuard]},
  { path: 'following', component: FollowingComponent },
  { path: '',   redirectTo: '/account', pathMatch: 'full' },
  { path: '**', redirectTo: '/account' }
];
const myMediaRoutes: Routes = [
  { path: 'my-media-images', component: FollowingComponent },
  { path: 'my-media-videos', component: FollowingComponent },
  { path: 'my-media-details', component: FollowingComponent },
  { path: '',   redirectTo: '/account', pathMatch: 'full' },
  { path: '**', redirectTo: '/account' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
