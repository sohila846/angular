import { UserReqService } from './../user-req.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any
  constructor(private usersService: UserReqService) { }

  ngOnInit(): void {
    this.usersService.getUsersList().subscribe(
      (data) => {
        console.log(data);
        this.users = data;
        // Show snackbar [Toastr] SUCCESS
      },
      (error) => {
        console.log(error);
        // Show snackbar [Toastr] ERROR
      }
    );

  }


}
