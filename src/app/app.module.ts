import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { TableService } from './table/table.service';
import { ScorersService } from './scorers/scorers.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { LaLigaTableComponent } from './la-liga-table/la-liga-table.component';
import { HttpClientModule } from '@angular/common/http';

import { SeriatableComponent } from './seriatable/seriatable.component';
import { Ligue1tableComponent } from './ligue1table/ligue1table.component';
import { BundesligatableComponent } from './bundesligatable/bundesligatable.component';
import { Scorersligue1Component } from './scorersligue1/scorersligue1.component';
import { ScorerslaligaComponent } from './scorerslaliga/scorerslaliga.component';
import { ScorersbundesComponent } from './scorersbundes/scorersbundes.component';
import { ScorersaseriaComponent } from './scorersaseria/scorersaseria.component';

const appRoutes: Routes = [
  {path: 'apl', component: AplComponent, canActivate:[AplGuard] },
  {path: 'Scorers', component: ScorersComponent},
  {path: 'Standing', component: TableComponent, canActivate:[TableGuard]},
  {path: 'Clubs', component: ClubsComponent, canActivate:[ClubsGuard]},
  {path: 'StandingLaLiga', component: LaLigaTableComponent},
  {path: 'StandingBundesLiga', component: BundesligatableComponent},
  {path: 'StandingLigue1', component: Ligue1tableComponent},
  {path: 'StandingSeriaA', component: SeriatableComponent},
  {path: 'ScorersLigue1', component: Scorersligue1Component},
  {path: 'ScorersLaLiga', component: ScorerslaligaComponent},
  {path: 'ScorersBundesliga', component: ScorersbundesComponent},
  {path: 'ScorersSeriaA', component: ScorersaseriaComponent},
  {path: 'Contact-Form', component: ContactFormComponent},
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
    ContactFormComponent,
    LaLigaTableComponent,
    SeriatableComponent,
    Ligue1tableComponent,
    BundesligatableComponent,
    ScorerslaligaComponent,
    Scorersligue1Component,
    ScorersbundesComponent,
    ScorersaseriaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    CommonModule,
    RouterModule.forRoot(appRoutes) 
    
  ],
  providers: [TableService,ScorersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
