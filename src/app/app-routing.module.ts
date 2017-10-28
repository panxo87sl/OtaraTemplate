import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/pages/home/home.component';
import { AboutusComponent } from 'app/pages/aboutus/aboutus.component';
import { InformacionComponent } from 'app/pages/informacion/informacion.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre-nosotros', component: AboutusComponent },
  {path: 'informacion', component: InformacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
