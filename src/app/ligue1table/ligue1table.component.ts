import { Component, OnInit } from '@angular/core';
import { Ligue1Service } from './ligue1.service';

@Component({
  selector: 'app-ligue1table',
  templateUrl: './ligue1table.component.html',
  styleUrls: ['./ligue1table.component.css']
})
export class Ligue1tableComponent implements OnInit {

  Ligue1Data:Array<any> = [];

  constructor(
    private ligue1Service:Ligue1Service
  ) { 

    this.ligue1Service.getAllligeu1().subscribe(
      (response)=>{
        console.log(response)
        this.Ligue1Data = response;
      }
      
    )
  }

  ngOnInit(): void {
  }

}
