import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-current-coin',
  templateUrl: './current-coin.component.html',
  styleUrls: ['./current-coin.component.scss'],
})
export class CurrentCoinComponent implements OnInit {
  public coinData: Array<any> = [];
  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this._getCoinData();
  }

  private _getCoinData(): void {
    this.coinService.getCoinData().subscribe((coins) => {
      this.coinData.push(...coins);
      console.log(this.coinData);
    });
  }
}
