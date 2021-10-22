import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import {  GetapiService} from './../getapi.service';
import { Router } from '@angular/router';
import { CounterService } from '../counter.service';


@Component({
  selector: 'app-product-list-api',
  templateUrl: './product-list-api.component.html',
  styleUrls: ['./product-list-api.component.css']
})
export class ProductListApiComponent implements OnInit {
 Product:any
 mycounter:any
  constructor(private getapiservice: GetapiService,private router : Router,private counterService: CounterService) { }

  ngOnInit(): void {
    this.getapiservice.getUsersList().subscribe(
      (data) => {
        console.log(data);
        this.Product=data;
        // Show snackbar [Toastr] SUCCESS
      },
      (error) => {
        console.log(error);
        // Show snackbar [Toastr] ERROR
      }
    );

    this.counterService
    .getCounter()
    .subscribe((res:any) => this.mycounter = res);
    
    
  
  }
  selectproduct(id:any){
    //this.getapiservice.getSingleUser(2).subscribe((data) => console.log("SINGLE USER",data))
    //this.getapiservice.getSingleUser(this.Product.id).subscribe((data) => console.log("SINGLE USER",data));
    this.router.navigate([`product-details-api/${id}`]);
    
   
  }

  increaseCounter(){
    this.counterService.setCounter(this.mycounter+1)

  }

  


}
