import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { AddCardComponent } from './add-card/add-card.component';
import { UpdateCardComponent } from './update-card/update-card.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    AddCardComponent,
    UpdateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
