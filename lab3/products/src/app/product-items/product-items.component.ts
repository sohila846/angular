
import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  
  
  @Input() productItem :any;
  @Output() sendproduct=new EventEmitter
  constructor() {
    
   }

  ngOnInit(): void {
  }
  selectproduct(){
    
    this.sendproduct.emit(this.productItem)
  }
}
