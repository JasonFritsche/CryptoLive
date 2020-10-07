import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.scss'],
})
export class CoinTableComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
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
  public dataSource = new MatTableDataSource();

  constructor(
    private coinService: CoinService,
    private router: Router,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  public refresh(): void {
    this.coinService.currentCoinData().subscribe((res) => {
      this.dataSource.data = res;
      console.log(res);
    });
    this.table !== undefined ? this.table.renderRows() : null;
  }

  public goToChart(el) {
    this.router.navigate(['/Chart', el.id]);
  }
}
