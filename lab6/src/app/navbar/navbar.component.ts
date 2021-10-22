import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 counter:any
  constructor(private CounterService:CounterService,private router : Router ) { }

  ngOnInit(): void {
    this.CounterService.getCounter().subscribe((counter)=>this.counter=counter)
  }
  opencart(){
    this.router.navigate([`cart`]);
  }
}
