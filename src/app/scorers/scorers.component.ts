import { Component, OnInit } from '@angular/core';
import { ScorersService } from './scorers.service';

@Component({
  selector: 'app-scorers',
  templateUrl: './scorers.component.html',
  styleUrls: ['./scorers.component.css']
})
export class ScorersComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA
  constructor(private _scorersService:ScorersService) { }

  ngOnInit(): void {
    this.dataSource = this._scorersService.getScorers();
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  team: string;
  gool:number

}
const ELEMENT_DATA: PeriodicElement[] = [];

