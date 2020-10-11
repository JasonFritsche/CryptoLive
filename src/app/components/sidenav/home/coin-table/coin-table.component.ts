import { ChangeDetectorRef, Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CoinService } from 'src/app/services/coin.service';
import { CoinInfoComponent } from './coin-info/coin-info.component';

@Component({
  selector: 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.scss'],
})
export class CoinTableComponent implements OnInit, AfterViewInit {
  public isLoaded: boolean = false;
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns: string[] = [
    'icon',
    'name',
    'volume',
    'price',
    'change',
  ];

  public dataSource = new MatTableDataSource();

  constructor(
    private coinService: CoinService,
    private router: Router,
    private changeDetectorRefs: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isLoaded = false;
    this.refresh();
  }

  public refresh(): void {
    this.coinService.currentCoinData().subscribe((res) => {
      this.dataSource.data = res;
      this.isLoaded = true;
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
