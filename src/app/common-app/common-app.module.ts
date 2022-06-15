import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    HeaderComponent
  ]
})
export class CommonAppModule { }
