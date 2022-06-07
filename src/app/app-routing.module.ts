import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { CreateSubclonnitComponent } from './subclonnit/create-subclonnit/create-subclonnit.component';
import { ListSubclonnitsComponent } from './subclonnit/list-subclonnits/list-subclonnits.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  //{ path: 'user-profile/:name', component:  },
  { path: 'list-subclonnits', component: ListSubclonnitsComponent},
  { path: 'create-post', component: CreatePostComponent },
  { path: 'create-subclonnit', component: CreateSubclonnitComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
