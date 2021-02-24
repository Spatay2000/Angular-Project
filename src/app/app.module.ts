import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { AplComponent } from './apl/apl.component';
import { TableComponent } from './table/table.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ScorersComponent } from './scorers/scorers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    TableComponent,
    AplComponent,
    ClubsComponent,
    ScorersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
