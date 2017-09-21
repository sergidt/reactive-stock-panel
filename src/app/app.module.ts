import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockPanelComponent } from './stock-panel/stock-panel.component';
import { StockCardComponent } from './stock-panel/card/stock-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StockPanelComponent,
    StockCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
