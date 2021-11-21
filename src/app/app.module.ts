import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { RefferencesComponent } from './MyComponents/refferences/refferences.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    RefferencesComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
