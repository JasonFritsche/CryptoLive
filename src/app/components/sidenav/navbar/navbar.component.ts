import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() toggled = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public toggleSideNav(): void {
    this.toggled.emit();
  }

  public openInfoDialog(): void {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      disableClose: true,
      width: '50vw',
    });
  }
}
