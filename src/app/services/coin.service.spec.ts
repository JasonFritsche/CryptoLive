import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoinService } from './coin.service';

describe('CoinService', () => {
  let service: CoinService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CoinService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
