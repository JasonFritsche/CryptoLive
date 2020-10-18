import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { map, retry, share, switchMap, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private coinsApiUrl: string = 'https://api.coinranking.com/v1/public/coins';
  private currentCoinData$: Observable<any>;
  private stopPolling = new Subject();

  constructor(private http: HttpClient) {
    this.currentCoinData$ = timer(1, 70000).pipe(
      switchMap(() =>
        this.http
          .get<any>(`${this.coinsApiUrl}`)
          .pipe(map((res) => res.data.coins))
      ),
      retry(),
      share(),
      takeUntil(this.stopPolling)
    );
  }

  ngOnInit() {}

  public currentCoinData(): Observable<any> {
    return this.currentCoinData$;
  }

  public getCoinData() {}

  ngOnDestroy() {
    this.stopPolling.next();
  }
}
