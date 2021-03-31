import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title = 'All orders';
  public col!: Order[];
  public headers = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((res) => {
      this.col = res;
      console.log(res);
    });
  }

  ngOnInit(): void {}
  public translateFr(): void {
    this.title = 'Toutes les prestations';
  }
  public openPopUp(): void {
    console.log('popup opended');
  }
}