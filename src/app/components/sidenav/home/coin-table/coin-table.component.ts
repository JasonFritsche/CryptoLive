import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CoinService } from 'src/app/services/coin.service';
import { CoinInfoComponent } from './coin-info/coin-info.component';

@Component({
  selector: 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.scss'],
})
export class CoinTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
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
    private changeDetectorRefs: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  public refresh(): void {
    this.coinService.currentCoinData().subscribe((res) => {
      this.dataSource.data = res;
    });
    this.changeDetectorRefs.detectChanges();
  }

  public goToChart(el) {
    this.router.navigate(['/Chart', el.id]);
  }

  public openCoinInfoDialog(el):void {
    const dialogRef = this.dialog.open(CoinInfoComponent, {
      data: el,
      width: '70vw',
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
