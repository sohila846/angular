import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  submitForm(form:any){
    console.log(form.form.controls.useremail.errors)
  }
  inchange(useremail:any){
    console.log(useremail)
  }
  onclick(){
    this.router.navigate([`forms/template-reactive`]);
  }
}
