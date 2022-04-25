import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';
import { TrendingComponent } from './trending/trending.component';
import { PopularComponent } from './popular/popular.component';
import { MovieComponent } from './movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MovielistService } from './movielist.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TitleComponent,
    TrendingComponent,
    PopularComponent,
    MovieComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [MovielistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
