import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import * as moment from 'moment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public date = moment().format('DD/MM/YYYY');
  public date2 = dayjs().format('DD/MM/YYYY');
  constructor() {}

  ngOnInit(): void {}
}
