import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../../../model/review";

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit {

  @Input()
  reviews: Review[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
