import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardAdminComponent } from './components/auth/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/auth/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/auth/board-user/board-user.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
