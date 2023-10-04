import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { RedesComponent } from './components/redes/redes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BasededatosComponent } from './components/basededatos/basededatos.component';
import { SliderbarComponent } from './components/sliderbar/sliderbar.component';
import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProgramacionComponent,
    RedesComponent,
    NotfoundComponent,
    BasededatosComponent,
    SliderbarComponent,
    CardComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
