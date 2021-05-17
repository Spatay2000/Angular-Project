import { Component, OnInit } from '@angular/core';
import { BundesligaService } from './bundesliga.service';

@Component({
  selector: 'app-bundesligatable',
  templateUrl: './bundesligatable.component.html',
  styleUrls: ['./bundesligatable.component.css']
})
export class BundesligatableComponent implements OnInit {

  BundesLigaData:Array<any> = [];

  constructor(
    private bundesligaService:BundesligaService
  ) { 

    this.bundesligaService.getAllbundesliga().subscribe(
      (response)=>{
        console.log(response)
        this.BundesLigaData = response;
      }
      
    )
  }

  ngOnInit(): void {
  }

}
