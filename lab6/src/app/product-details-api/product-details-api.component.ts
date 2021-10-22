import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetapiService } from '../getapi.service';

@Component({
  selector: 'app-product-details-api',
  templateUrl: './product-details-api.component.html',
  styleUrls: ['./product-details-api.component.css']
})
export class ProductDetailsApiComponent implements OnInit {
  singleProduct:any
  constructor(private getapiservice: GetapiService,private activeRoute : ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.getapiservice.getUsersList().subscribe(
      (data) => {
       
        this.singleProduct=data;
       
      },
      (error) => {
        console.log(error);
      
      }
    );
    this.activeRoute.params.subscribe(params => {
     
       this.getapiservice.getSingleUser(params.id).subscribe((data) => {console.log("SINGLE USER",data)
       this.singleProduct=data;
    })
      
    })
    
  }

}
