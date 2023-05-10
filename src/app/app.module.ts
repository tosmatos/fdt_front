import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorairesComponent } from './horaires/horaires.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HorairesDetailComponent } from './horaires-detail/horaires-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HorairesComponent,
    HorairesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
