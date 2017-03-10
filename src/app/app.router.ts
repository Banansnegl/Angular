import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { CalendarComponent } from './02/calendar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent} from './home/home.component';
import { GalleriComponent } from './galleri/galleri.component';

const routes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'about', component: AboutComponent },
    { path: 'galleri', component: GalleriComponent },
    { path: '**', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
