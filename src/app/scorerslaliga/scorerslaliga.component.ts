import { Component, OnInit } from '@angular/core';
import { ScorerslaligaService } from './scorerslaliga.service';

@Component({
  selector: 'app-scorerslaliga',
  templateUrl: './scorerslaliga.component.html',
  styleUrls: ['./scorerslaliga.component.css']
})
export class ScorerslaligaComponent implements OnInit {

  ScorersLaLigaData:Array<any> = [];

  constructor(
    private scorerLaLiga:ScorerslaligaService
  ) { 

    this.scorerLaLiga.getAllScorersLaLiga().subscribe(
      (response)=>{
        console.log(response)
        this.ScorersLaLigaData = response;
      }
      
    )
  }

  ngOnInit(): void {
  }

}
