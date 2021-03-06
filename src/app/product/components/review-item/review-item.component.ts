import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Review} from "../../../model/review";

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewItemComponent implements OnInit {

  @Input()
  review: Review | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
