import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/pages/home/home.component';
import { AboutusComponent } from 'app/pages/aboutus/aboutus.component';
import { InformacionComponent } from 'app/pages/informacion/informacion.component';
import { PanelComponent } from 'app/pages/panel/panel.component';
import { PanelRoutingModule } from 'app/pages/panel/panel-routing.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre-nosotros', component: AboutusComponent },
  {path: 'informacion', component: InformacionComponent },
  { path: 'panel', component: PanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PanelRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
