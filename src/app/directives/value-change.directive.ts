import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ValueChange]',
})
export class ValueChangeDirective {
  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    const color =
      this.el.nativeElement.innerText.substr(0, 1) === '-' ? 'red' : 'green';
    this.el.nativeElement.style.color = color;
  }
}
