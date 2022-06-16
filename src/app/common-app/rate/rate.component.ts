import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateComponent implements OnInit {

  @Input()
  rate: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
