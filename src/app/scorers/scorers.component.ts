import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorers',
  templateUrl: './scorers.component.html',
  styleUrls: ['./scorers.component.css']
})
export class ScorersComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA
  constructor() { }

  ngOnInit(): void {
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  team: string;
  gool:number

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mohamed Salah',team: 'Liverpool', gool: 17},
  {position: 2, name: '	Bruno Fernandes', team: '	Manchester United',gool: 16},
  {position: 3, name: 'Harry Kane', team: 'Tottenham',gool: 16},
  {position: 4, name: 'Dominic Calvert-Lewin', team: 'Everton',gool: 14},
  {position: 5, name: '	Patrick Bamford', team: 'Leeds', gool: 13},
  {position: 6, name: '	Son Heung-Min', team: '	Tottenham',gool: 13 },
  {position: 7, name: '	Ilkay Gündogan',team: 'Manchester City', gool: 12 },
  {position: 8, name: 'Jamie Vardy', team: '	Leicester',gool: 12},
  {position: 9, name: 'Alexandre Lacazette',team: 'Arsenal', gool: 10 },
  {position: 10, name: 'Callum Wilson', team: '	Newcastle',gool: 10},
];

