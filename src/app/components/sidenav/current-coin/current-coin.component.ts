import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-current-coin',
  templateUrl: './current-coin.component.html',
  styleUrls: ['./current-coin.component.scss'],
})
export class CurrentCoinComponent implements OnInit {
  public selectedValue = '';
  public coinListData: Array<any> = [];
  public currentCoinData: object = {};

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this._getCoinData();
  }

  private _getCoinData(): void {
    this.coinService.getCoinDataList().subscribe((coins) => {
      this.coinListData.push(...coins);
    });
  }

  public onSelectionChange(coinId: number): void {
    this.coinService.getCoinData(coinId).subscribe((res) => {
      this.currentCoinData = { ...res.data.coin };
      console.log(res.data.coin);
    });
  }
}
