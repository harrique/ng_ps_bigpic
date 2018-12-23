import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product detail';
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    this.productService.getProduct(id).subscribe(
      product => {
        this.product = product;
      },
      error => this.errorMessage = <any>error );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
