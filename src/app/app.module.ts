import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AplComponent } from './apl/apl.component';

import { ClubsComponent } from './clubs/clubs.component';
import { ScorersComponent } from './scorers/scorers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { AplGuard } from './apl/apl.guard';
import { TableGuard } from './table/table.guard';
import { ClubsGuard } from './clubs/clubs.guard';

const appRoutes: Routes = [
  {path: 'apl', component: AplComponent, canActivate:[AplGuard] },
  {path: 'Scorers', component: ScorersComponent},
  {path: 'Standing', component: TableComponent, canActivate:[TableGuard]},
  {path: 'Clubs', component: ClubsComponent, canActivate:[ClubsGuard]},

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AplComponent,
    ClubsComponent,
    ScorersComponent,
    TableComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
