import { Component, OnInit } from '@angular/core';
import { LoaderServeService } from '../loader-serve.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading :any;
  constructor(private loaderService : LoaderServeService) { }

  ngOnInit(): void {
    this.isLoading = this.loaderService.getLoader();
  }

}
