import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel lives here

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/shared/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
