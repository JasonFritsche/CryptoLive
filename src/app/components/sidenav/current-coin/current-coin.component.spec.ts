import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CurrentCoinComponent } from './current-coin.component';

describe('CurrentCoinComponent', () => {
  let component: CurrentCoinComponent;
  let fixture: ComponentFixture<CurrentCoinComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CurrentCoinComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
