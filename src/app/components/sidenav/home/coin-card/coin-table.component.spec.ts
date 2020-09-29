import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoinTableComponent } from './coin-table.component';

describe('CoinTableComponent', () => {
  let component: CoinTableComponent;
  let fixture: ComponentFixture<CoinTableComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CoinTableComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CoinTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
