import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import { RateComponent } from './rate/rate.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    RateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    RateComponent,
    NotFoundComponent
  ]
})
export class CommonAppModule { }
