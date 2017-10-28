import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/pages/home/home.component';
import { AboutusComponent } from 'app/pages/aboutus/aboutus.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre-nosotros', component: AboutusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
