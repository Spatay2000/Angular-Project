import { Component, OnInit } from '@angular/core';
import { ScorersbundesService } from './scorersbundes.service';

@Component({
  selector: 'app-scorersbundes',
  templateUrl: './scorersbundes.component.html',
  styleUrls: ['./scorersbundes.component.css']
})
export class ScorersbundesComponent implements OnInit {
  ScorersBundesData:Array<any> = [];
  constructor(
    private scorerBundes:ScorersbundesService
  ) { 

    this.scorerBundes.getAllScorersBundes().subscribe(
      (response)=>{
        console.log(response)
        this.ScorersBundesData = response;
      }
      
    )
  }

  ngOnInit(): void {
  }

}
