import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  userForm = new FormGroup( {
    firstName: new FormControl(),
    lastName: new FormControl(),
    comment: new FormControl(),
  }
  )
  onSubmit(){
    console.log(this.userForm.value);
  }
  

}