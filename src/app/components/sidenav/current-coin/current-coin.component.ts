import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap, takeUntil } from 'rxjs/operators';
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
  public coinroutedata;
  id: any;
  paramsSub: any;

  constructor(
    private coinService: CoinService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.coinService.currentCoinData().subscribe((res) => {
      console.log(res);
      this.currentCoinData = res;
      this.updateChartData();
    });
    this.paramsSub = this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
      this.onSelectionChange(this.id);
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

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
