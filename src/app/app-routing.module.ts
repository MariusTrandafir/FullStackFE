import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMediaComponent } from './my-media/my-media.component';
import { FollowingComponent } from './following/following.component';
import { AuthGuard } from './guards/auth.guard';
import { MediaDetailsComponent } from './my-media/media-details/media-details.component';

const routes: Routes = [
  { path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'media', component: MyMediaComponent, canActivate: [AuthGuard] },
  { path: 'media-details', component: MediaDetailsComponent, canActivate: [AuthGuard] },
  { path: 'upload-media',
    loadChildren: () => import('./upload-media/upload-media.module').then(m => m.UploadMediaModule),
     canActivate: [AuthGuard]},
  { path: 'following', component: FollowingComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/account', pathMatch: 'full' },
  { path: '**', redirectTo: '/account' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
