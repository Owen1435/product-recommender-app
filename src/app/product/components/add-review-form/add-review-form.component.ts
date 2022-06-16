import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {AddProductReviewRequestDto} from "../../../model/dto/add-product-review.request.dto";

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddReviewFormComponent {
  @Output()
  formSubmit: EventEmitter<AddProductReviewRequestDto> = new EventEmitter<AddProductReviewRequestDto>();

  public form : FormGroup = new FormGroup({});

  constructor() {
    this.form = new FormGroup({
      "text": new FormControl('', [Validators.required]),
      "rate": new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(5)
      ]),
    });
  }

  onSubmit() {
    const addProductReviewDto: AddProductReviewRequestDto = {
      rate: this.form.get('rate')?.value,
      text: this.form.get('text')?.value
    }
    console.log(addProductReviewDto)
    this.formSubmit.emit(addProductReviewDto)
    this.form.reset()
  }
}
