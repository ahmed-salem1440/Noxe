import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { ActorsComponent } from './components/actors/actors.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { DetailsComponent } from './components/details/details.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'tv-shows',canActivate:[AuthGuard],component:TvShowsComponent},
  {path:'actors',canActivate:[AuthGuard],component:ActorsComponent},
  {path:'details/:media/:id',canActivate:[AuthGuard],component:DetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgotPassword',component:ForgetPasswordComponent},
  {path:'settings/:action',canActivate:[AuthGuard],component:SettingsComponent},

  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
