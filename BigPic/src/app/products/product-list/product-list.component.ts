import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../model/product';
import { ProductService } from '../../services/product/product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private _listFilter: string;
  pageTitle: string;
  products: Array<IProduct> = [];
  filteredProducts: Array<IProduct> = [];
  showImage: boolean;
  errorMessage: string;

  constructor(private productService: ProductService) {
    this.pageTitle = 'Product List';
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.listFilter = '';
      },
      error => this.errorMessage = <any>error );

    this.showImage = false;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(event: string): void {
    this.pageTitle = event;
  }
}
