import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public currentCoinData: any = [];

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.coinService.currentCoinData().subscribe((res) => {
      this.currentCoinData = [...res.data.coins];
      console.log(this.currentCoinData);
    });
  }
}
