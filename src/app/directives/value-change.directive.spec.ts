import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ValueChangeDirective } from './value-change.directive';

@Component({
  selector: 'my-test-component',
  template: '<h1 class="mytag" ValueChange>55.55</h1>',
})
export class TestComponent {}

describe('ValueChangeDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ValueChangeDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('.mytag'));
  });

  it('should create an instance', () => {
    const directive = new ValueChangeDirective(inputEl);
    expect(directive).toBeTruthy();
  });

  it('should have a font color of green', () => {
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    const h1color = h1.style.color;
    // how to handle after content init?!
    setTimeout(() => {
      expect(h1color).toBe('green');
    }, 3000);
  });
});
