import { Component, HostBinding, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingInputComponent),
      multi: true
    }
  ]
})
export class RatingInputComponent implements ControlValueAccessor {
  stars: boolean[] = Array(5).fill(false);
  @Input() disabled = false;
  @HostBinding('style.opacity')
  writeValue(rating: number): void {
    this.stars = this.stars.map((_, i) => rating > i);
    this.onChange(this.value);
  }
  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

   setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get opacity() {
    return this.disabled ? 0.25 : 1;
  }
  onChange = (rating: number) => { };

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => { };

  get value(): number {
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  }


  rate(rating: number) {
    if (!this.disabled) {
      this.writeValue(rating);
    }
  }


}