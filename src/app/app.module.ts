import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { SubclonnitSideBarComponent } from './shared/subclonnit-side-bar/subclonnit-side-bar.component';
import { CreateSubclonnitComponent } from './subclonnit/create-subclonnit/create-subclonnit.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ListSubclonnitsComponent } from './subclonnit/list-subclonnits/list-subclonnits.component';
import { TokenInterceptor } from './token-interceptor';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ViewPostComponent } from './post/view-post/view-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    VoteButtonComponent,
    PostTileComponent,
    SideBarComponent,
    SubclonnitSideBarComponent,
    CreateSubclonnitComponent,
    CreatePostComponent,
    ListSubclonnitsComponent,
    ViewPostComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
