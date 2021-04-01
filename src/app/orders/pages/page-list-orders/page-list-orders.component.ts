import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public states = Object.values(StateOrder);
  public title = 'All orders';
  @ViewChildren('line') lines!: QueryList<'line'>;
  @ViewChild('line') line!: ElementRef;
  // public col!: Order[];
  public col$: Observable<Order[]>;
  public headers = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  constructor(
    private ordersService: OrdersService,
    private cd: ChangeDetectorRef
  ) {
    this.col$ = this.ordersService.collection;
    // this.ordersService.collection.subscribe((res) => {
    //   this.col = res;
    // });
  }

  ngOnInit(): void {}
  public translateFr(): void {
    this.title = 'Toutes les prestations';
  }
  ngAfterViewInit() {
    this.lines.forEach((line) => {
      console.log(line);
    });
  }
  public openPopUp(): void {
    console.log('popup opended');
  }
  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeState(item, state).subscribe((res) => {
      // traiter res de l'api
      item.state = res.state;
      this.cd.detectChanges();
    });
  }

  test() {
    // console.log(this.line.nativeElement);

    this.lines.forEach((line) => {
      console.log(line);
    });
  }
}
