import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateSubclonnitComponent } from './pages/home/subclonnit/create-subclonnit/create-subclonnit.component';
import { ListSubclonnitsComponent } from './pages/home/subclonnit/list-subclonnits/list-subclonnits.component';
import { CreatePostComponent } from './pages/post/create-post/create-post.component';
import { ViewPostComponent } from './pages/post/view-post/view-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'list-subclonnits', component: ListSubclonnitsComponent},
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'create-subclonnit', component: CreateSubclonnitComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
