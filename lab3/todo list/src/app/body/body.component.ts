import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
   mylist:Array<string>=[];
  constructor() { }

  ngOnInit(): void {
  }
 add(thing:any){
   //console.log(thing.value)
   this.mylist.push(thing.value)
 }
 recieveitem(todo:any){
      let index=this.mylist.indexOf(todo);
      this.mylist.splice(index,1);
 }
}
