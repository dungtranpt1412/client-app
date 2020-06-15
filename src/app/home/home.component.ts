import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content: any;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:4200/api/home').subscribe(res => {
      this.content = res;
    }, error => {
      console.log(error.message);
    });
  }

  ngOnInit(): void {
  }

}
