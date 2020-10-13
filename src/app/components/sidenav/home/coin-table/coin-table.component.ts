import { ChangeDetectorRef, Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CoinService } from 'src/app/services/coin.service';
import { CoinInfoComponent } from './coin-info/coin-info.component';

export interface Coin {
  icon: string;
  name: string;
  volume: string;
  price: string;
  change: string;
}

@Component({
  selector: 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.scss'],
})
export class CoinTableComponent implements OnInit, AfterViewInit {
  public dataSource = new MatTableDataSource();
  public isLoaded: boolean = false;
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns: string[] = [
    'icon',
    'name',
    'volume',
    'price',
    'change',
  ];

  constructor(
    private coinService: CoinService,
    private router: Router,
    private changeDetectorRefs: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isLoaded = false;
    this.refresh();
    this.dataSource.filterPredicate = function(data: Coin, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
  }

  public refresh(): void {
    this.coinService.currentCoinData().subscribe((res: Coin[]) => {
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
      panelClass: 'coin-info-dialog',
    });
  }

  public searchTable(searchTerm: string): void {
    this.dataSource.filter = searchTerm.trim().toLowerCase();
    console.log(this.dataSource.filter);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public getInfoToolTip(el): string {
    return `Show ${el.name} information`;
  }
}
