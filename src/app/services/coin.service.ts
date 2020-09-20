import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  constructor(private http: HttpClient) {}
  private coinsApiUrl: string = 'https://api.coinranking.com/v1/public/coins';

  public getCoinData() {
    return this.http.get<any>(this.coinsApiUrl).pipe(
      map((result) => {
        return result.data.coins;
      })
    );
  }
}
