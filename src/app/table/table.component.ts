import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  EplData:Array<any> = [];

  constructor(
    private tableService:TableService
  ) { 

    this.tableService.getAllepl().subscribe(
      (response)=>{
        console.log(response)
        this.EplData = response;
      }
      
    )
  }

  ngOnInit(): void {
  
  }

  
  



}
