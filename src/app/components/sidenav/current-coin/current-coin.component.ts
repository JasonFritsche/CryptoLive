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
  public currentCoinData: any = {};
  public selectedCoinData: any = {};
  public selectedCoindId: number = null;

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.coinService.currentCoinData().subscribe((res) => {
      this.currentCoinData = { ...res };
      this.updateChartData();
      this._getCoinData();
    });
  }

  private _getCoinData(): void {
    this.coinListData.push(...this.currentCoinData.data.coins);
  }

  public onSelectionChange(coinId: number): void {
    this.selectedCoindId = coinId;
  }

  public updateChartData() {
    if (this.selectedCoindId !== null) {
      this.selectedCoinData = this.coinListData.find(
        (coin) => coin.id === this.selectedCoindId
      );
    }
  }
}
