import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  productId: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.product = [];
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('productId')
      this.http.get('http://localhost:4200/api/product/' + this.productId).subscribe(res => {
        this.product = res;
      }, error => {
        console.log(error.message);
      });
    })

  }

  ngOnInit(): void {
  }

}
