import { Component} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmedValidator } from '../confirmed.validator';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {
  
  
  moviesForm=new FormGroup({
    myname:new FormControl("",Validators.required),
    password:new FormControl("",[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    email:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]),
    conpassword:new FormControl("",[Validators.required]),
    username:new FormControl("",[Validators.required,Validators.pattern("^[-a-zA-Z0-9-()]+(\S+[-a-zA-Z0-9-()]+)*$")])
  },
  // {
  //   validator:ConfirmedValidator('password', 'conpassword')
  // }

  )

  ;
 
  

  

  get moviesFormControls() {
    return this.moviesForm.controls;
  }

  constructor(private fb: FormBuilder){
    
  }
  submitReactiveForm() {
    console.log(this.moviesForm);
    console.log(this.moviesForm.value);
  }
  
}
