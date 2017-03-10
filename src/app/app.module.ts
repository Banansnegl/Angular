import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { HomeComponent} from './home/home.component';
import { CalendarComponent } from './02/calendar.component';
import { AboutComponent } from './about/about.component';
import { GalleriComponent } from './galleri/galleri.component';

import { AppComponent } from './app.component';
import { routing } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    AboutComponent,
    GalleriComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
