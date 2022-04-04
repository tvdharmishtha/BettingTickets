import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityAppModule } from "./utility-app/utility-app.module";
import { DayFilterComponent } from './Layout/day-filter/day-filter.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { OfferComponent } from './Layout/offer/offer.component';
import { MatchDetailsComponent } from './Layout/match-details/match-details.component';
import { TicketComponent } from './Layout/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    DayFilterComponent,
    MenuComponent,
    OfferComponent,
    MatchDetailsComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilityAppModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
