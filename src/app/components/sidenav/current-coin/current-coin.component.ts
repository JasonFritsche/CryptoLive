import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public selectedCoindId: number;
  public coinroutedata;
  paramsSub: any;

  constructor(
    private coinService: CoinService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.coinService.currentCoinData().subscribe((res) => {
      this.currentCoinData = res;
      this.updateChartData();
    });
    this.paramsSub = this.route.params.subscribe((params) => {
      this.selectedCoindId = parseInt(params['id']);
      this.onSelectionChange(this.selectedCoindId);
    });
  }

  public onSelectionChange(coinId: number): void {
    this.selectedCoindId = coinId;
  }

  public updateChartData() {
    const coinId = isNaN(this.selectedCoindId) ? 1 : this.selectedCoindId;
    this.selectedCoinData = this.currentCoinData.find(
      (coin) => coin.id === coinId
    );
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
