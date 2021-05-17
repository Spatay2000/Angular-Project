import { Component, OnInit } from '@angular/core';
import { ScorersaseriaService } from './scorersaseria.service';

@Component({
  selector: 'app-scorersaseria',
  templateUrl: './scorersaseria.component.html',
  styleUrls: ['./scorersaseria.component.css']
})
export class ScorersaseriaComponent implements OnInit {

  ScorersSeriaAData:Array<any> = [];

  constructor(
    private scorerASeria:ScorersaseriaService
  ) { 

    this.scorerASeria.getAllSeriaScorers().subscribe(
      (response)=>{
        console.log(response)
        this.ScorersSeriaAData = response;
      }
      
    )
  }
  ngOnInit(): void {
  }

}
