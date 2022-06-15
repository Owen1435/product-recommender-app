import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-products-page-presentation',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPagePresentationComponent implements OnInit {

  @Input()
  products: Product[] | undefined

  constructor() {
  }

  ngOnInit(): void {
  }
}
