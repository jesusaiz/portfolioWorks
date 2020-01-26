import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';


import * as $ from 'jquery';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { WebComponent } from './portfolio/web/web.component';
import { GraficoComponent } from './portfolio/grafico/grafico.component';
import { CurriculumComponent } from './about/curriculum/curriculum.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IntroComponent,
    PortfolioComponent,
    AboutComponent,
    WebComponent,
    GraficoComponent,
    CurriculumComponent,
    HomeComponent,
    Page404Component,
  
  ],
  imports: [
    BrowserModule,
    routing
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
