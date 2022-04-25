import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { PopularComponent } from './popular/popular.component';
const routes: Routes = [ { path: '*', component: LoginComponent },
                        { path: 'login', component: LoginComponent },
                         { path: 'home', component: HomeComponent },
                          {path: 'movie', component: MovieComponent },
                          {path: 'popular', component: PopularComponent },
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
