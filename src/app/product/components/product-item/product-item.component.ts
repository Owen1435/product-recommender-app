import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product | undefined

  get productImg(): string {
    return environment.staticUrl + this.product?.img
  }

  constructor() {}

  ngOnInit(): void {
  }
}
