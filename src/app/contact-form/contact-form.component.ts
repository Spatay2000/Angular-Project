import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'
import { FormBuilder } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  constructor(private http:HttpClient){}
  userForm = new FormGroup( {
    firstName: new FormControl(),
    lastName: new FormControl(),
    comment: new FormControl(),
  }
  )
  onSubmit(post: any): void{
    let url = "http://localhost:3000/post";
    console.log(this.userForm.value);
    this.http.post(url,post).subscribe(res=>console.log("Done"));
    

  }
  

}