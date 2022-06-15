import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from "../services/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  id: number
  product: Product | undefined

  constructor(
    private productService: ProductService,
    route: ActivatedRoute,
  ) {
    this.id = Number(route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    if (this.id) {
      this.productService.getProduct(this.id).subscribe(product => {
        console.log(product)
        this.product = product
      })
    }
  }
}
