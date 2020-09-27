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
  public displayedColumns: string[] = ['name', 'volume', 'price'];
  public volume: number;
  public symbol: string;
  public price: string;
  public name: string;

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.coinService.currentCoinData().subscribe((coins) => {
      this.currentCoinData = coins;
    });
  }

  ngAfterViewInit() {}
}
