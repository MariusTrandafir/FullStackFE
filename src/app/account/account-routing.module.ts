import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { BlockedAccountsComponent } from './blocked-accounts/blocked-accounts.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from '../guards/auth.guard';

const accountRoutes: Routes = [
{ path: '', component: AccountComponent,
  children : [
    {path : '', redirectTo: 'login'},
    {path : 'login', component:LoginComponent},
    {path : 'register', component:RegisterComponent},
    {path : 'news-feed', component:NewsFeedComponent, canActivate: [AuthGuard]},
    {path : 'blocked-accounts', component:BlockedAccountsComponent, canActivate: [AuthGuard]},
    {path : 'account-update', component:AccountUpdateComponent, canActivate: [AuthGuard]},
    {path : 'search', component:SearchComponent, canActivate: [AuthGuard]},
    {path : 'logout', component:LogoutComponent, canActivate: [AuthGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
