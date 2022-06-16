import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store } from '@ngrx/store';

import {Product} from "../../model/product";
import {ProductsPageState} from "../state-management/products-page.reducer";
import {productsSelector} from "../state-management/products-page.selectors";
import {GetProductsRequestAction} from "../state-management/products-page.actions";

@Component({
  selector: 'app-products-page-smart',
  template: `
    <app-products-page-presentation
      [products]="(products$ | async)!"
    >
    </app-products-page-presentation>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageSmartComponent implements OnInit {

  products$: Observable<Product[]>

  constructor(
    private store: Store<ProductsPageState>,
  ) {
    this.products$ = this.store.pipe(select(productsSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProductsRequestAction())
  }
}
