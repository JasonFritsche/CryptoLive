import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-current-coin',
  templateUrl: './current-coin.component.html',
  styleUrls: ['./current-coin.component.scss'],
})
export class CurrentCoinComponent implements OnInit {
  public selectedValue = '';
  public currentCoinData: any = [];
  public selectedCoinData: any = {};
  public selectedCoindId: number = null;

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.coinService.currentCoinData().subscribe((res) => {
      console.log(res);
      this.currentCoinData = res;
      this.updateChartData();
    });
  }

  public onSelectionChange(coinId: number): void {
    this.selectedCoindId = coinId;
  }

  public updateChartData() {
    if (this.selectedCoindId !== null) {
      this.selectedCoinData = this.currentCoinData.find(
        (coin) => coin.id === this.selectedCoindId
      );
    }
  }
}
