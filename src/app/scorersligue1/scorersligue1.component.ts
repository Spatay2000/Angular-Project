import { Component, OnInit } from '@angular/core';
import { Scorersligue1Service } from './scorersligue1.service';

@Component({
  selector: 'app-scorersligue1',
  templateUrl: './scorersligue1.component.html',
  styleUrls: ['./scorersligue1.component.css']
})
export class Scorersligue1Component implements OnInit {

  ScorersLigue1Data:Array<any> = [];

  constructor(
    private scorersLigue1:Scorersligue1Service
  ) { 

    this.scorersLigue1.getAllscorersligue1().subscribe(
      (response)=>{
        console.log(response)
        this.ScorersLigue1Data = response;
      }
      
    )
  }

  ngOnInit(): void {
  }

}
