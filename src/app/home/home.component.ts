import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList: any;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:4200/api/product').subscribe(res => {
      this.productList = res;
    }, error => {
      console.log(error.message);
    });
  }

  ngOnInit(): void {
  }

}
