import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  listStaff: any;
  staffRequest: any;
  key = 'listStaff';
  constructor(private http: HttpClient) {
    this.listStaff = [];
    this.http.get('http://localhost:4200/api/staff').subscribe(res => {
      this.listStaff = res[this.key];
    }, error => {
      console.log(error.message);
    });
  }

  ngOnInit(): void {
  }

}
