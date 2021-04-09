import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  games: number;
  point: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Manchester City', games: 30, point: 71},
  {position: 2, name: 'Manchester United', games: 30,point: 57},
  {position: 3, name: 'Leicester City', games:30,point: 56},
  {position: 4, name: 'Chelsea', games: 30, point: 51},
  {position: 5, name: 'West Ham United', games: 30,point: 48},
  {position: 6, name: 'Liverpool', games: 30,point: 46},
  {position: 7, name: 'Everton', games: 30,point: 46 },
  {position: 8, name: 'Tottenham Hotspur', games: 30, point: 45},
  {position: 9, name: 'Aston Villa', games: 30, point: 41},
  {position: 10, name: 'Arsebal', games: 30, point: 41},
  {position: 11, name: 'Crystal Palace', games: 30, point: 37},
  {position: 12, name: 'Leeds United', games: 30,point: 36},
  {position: 13, name: 'Wolverhampton Wanderers', games:30,point: 35},
  {position: 14, name: 'Southampton', games: 30, point: 33},
  {position: 15, name: 'Burnley', games: 30,point: 33},
  {position: 16, name: 'Brighton and Hove Albion', games: 30,point: 29},
  {position: 17, name: 'Fulham', games: 30,point: 28 },
  {position: 18, name: 'Newcastle United', games: 30, point: 26},
  {position: 19, name: 'West Bromwich Albion', games: 30, point: 18},
  {position: 20, name: 'Sheffield United', games: 30, point: 14},
];