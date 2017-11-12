import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { NewsComponent } from './pages/news/news.component';
import { PanelComponent } from './pages/panel/panel.component';
import { CreatepostComponent } from './pages/panel/createpost/createpost.component';
import { EditpostComponent } from './pages/panel/editpost/editpost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    InformacionComponent,
    NewsComponent,
    PanelComponent,
    CreatepostComponent,
    EditpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
