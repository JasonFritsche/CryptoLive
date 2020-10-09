import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.component.html',
  styleUrls: ['./coin-info.component.scss']
})
export class CoinInfoComponent implements OnInit {
public description: SafeHtml;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.data)
    this.description = this.sanitizer.bypassSecurityTrustHtml(this.data.description);
  }

}
