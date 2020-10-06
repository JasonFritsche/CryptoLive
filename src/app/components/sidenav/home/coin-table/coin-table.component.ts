import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.scss'],
})
export class CoinTableComponent implements OnInit {
  public currentCoinData: any = [];
  public displayedColumns: string[] = [
    'icon',
    'name',
    'volume',
    'price',
    'change',
  ];
  public volume: number;
  public symbol: string;
  public price: string;
  public name: string;
  public iconUrl: string;
  public change: number;

  constructor(private coinService: CoinService, private router: Router) {}

  ngOnInit(): void {
    this.coinService.currentCoinData().subscribe((coins) => {
      this.currentCoinData = coins;
      console.log(this.currentCoinData);
    });
  }

  public goToChart(el) {
    console.log(el);
    this.router.navigate(['/Chart', el.id]);
  }
}
