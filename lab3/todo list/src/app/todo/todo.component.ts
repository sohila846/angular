import { Component, Input, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() Item :any;
  @Output() senditem=new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
onremove(){
  this.senditem.emit(this.Item);
}
}
