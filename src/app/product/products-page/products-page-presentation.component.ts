import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-products-page-presentation',
  templateUrl: './products-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPagePresentationComponent implements OnInit {

  @Input()
  products: Product[] | undefined

  constructor() {
  }

  ngOnInit(): void {
  }
}
