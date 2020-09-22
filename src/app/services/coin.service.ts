import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  constructor(private http: HttpClient) {}
  private coinsApiUrl: string = 'https://api.coinranking.com/v1/public/coins';
  private coinApiUrl: string = 'https://api.coinranking.com/v1/public/coin/';

  private _currentCoinSubject = new Subject<number>();

  public currentCoin$ = this._currentCoinSubject.asObservable();

  public getCoinDataList() {
    return this.http.get<any>(this.coinsApiUrl).pipe(
      map((result) => {
        return result.data.coins;
      })
    );
  }

  public getCoinData(coinId: number) {
    this.currentCoinChanged(coinId);
    return this.http.get<any>(`${this.coinApiUrl}${coinId}?timePeriod=24h`);
  }

  public currentCoinChanged(coinId: number) {
    this._currentCoinSubject.next(coinId);
  }
}
