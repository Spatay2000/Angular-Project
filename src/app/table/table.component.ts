import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private _tableService:TableService) { }

  ngOnInit(): void {
    this.dataSource = this._tableService.getTable();
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  games: number;
  point: number;
}

const ELEMENT_DATA: PeriodicElement[] = [];  