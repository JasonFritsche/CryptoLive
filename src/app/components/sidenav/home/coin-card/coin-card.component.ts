import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss'],
})
export class CoinCardComponent implements OnInit, AfterViewInit {
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

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.coinService.currentCoinData().subscribe((coins) => {
      this.currentCoinData = coins;
      console.log(this.currentCoinData);
    });
  }

  ngAfterViewInit() {}
}
