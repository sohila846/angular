import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitForm(form:any){
    console.log(form.form.controls.useremail.errors)
  }
  inchange(useremail:any){
    console.log(useremail)
  }
}
