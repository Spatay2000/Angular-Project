import { Component, OnInit } from '@angular/core';
import { LaLigaServiceService } from './la-liga-service.service';

@Component({
  selector: 'app-la-liga-table',
  templateUrl: './la-liga-table.component.html',
  styleUrls: ['./la-liga-table.component.css']
})
export class LaLigaTableComponent implements OnInit {

  LaLigaData:Array<any> = [];

  constructor(
    private laligaServiceService:LaLigaServiceService
  ) { 

    this.laligaServiceService.getAlllaliga().subscribe(
      (response)=>{
        console.log(response)
        this.LaLigaData = response;
      }
      
    )
  }

  ngOnInit(): void {
  }

  
  


}
