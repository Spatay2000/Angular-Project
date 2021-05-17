import { Component, OnInit } from '@angular/core';
import { ScorersService } from './scorers.service';

@Component({
  selector: 'app-scorers',
  templateUrl: './scorers.component.html',
  styleUrls: ['./scorers.component.css']
})
export class ScorersComponent implements OnInit {
  
  ScorersData:Array<any> = [];

  constructor(
    private scorers:ScorersService
  ) { 

    this.scorers.getAllscorersepl().subscribe(
      (response)=>{
        console.log(response)
        this.ScorersData = response;
      }
      
    )
  }
  ngOnInit(): void {
    
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  team: string;
  gool:number

}
const ELEMENT_DATA: PeriodicElement[] = [];

