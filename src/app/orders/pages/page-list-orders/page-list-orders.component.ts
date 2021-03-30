import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title = 'All orders';
  constructor() {}

  ngOnInit(): void {}
  public translateFr(): void {
    this.title = 'Toutes les prestations';
  }
  public openPopUp(): void {
    console.log('popup opended');
  }
}
