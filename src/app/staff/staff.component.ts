import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaffRequest } from '../model/staff-request';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  staff: any;
  staffRequest: any;
  constructor(private http: HttpClient) {
    this.staff = [];
    this.staffRequest = new StaffRequest();
    this.staffRequest.staffId = 9;
    this.http.post('http://localhost:4200/api/staff', this.staffRequest).subscribe(res => {
      this.staff = res;
    }, error => {
      console.log(error.message);
    });
  }

  ngOnInit(): void {
  }

}
