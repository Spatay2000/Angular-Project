import { Component, OnInit } from '@angular/core';
import { SeriaService } from './seria.service';

@Component({
  selector: 'app-seriatable',
  templateUrl: './seriatable.component.html',
  styleUrls: ['./seriatable.component.css']
})
export class SeriatableComponent implements OnInit {

  SeriaData:Array<any> = [];

  constructor(
    private seriaService:SeriaService
  ) { 

    this.seriaService.getAllseria().subscribe(
      (response)=>{
        console.log(response)
        this.SeriaData = response;
      }
      
    )
  }

  ngOnInit(): void {
  }

}
