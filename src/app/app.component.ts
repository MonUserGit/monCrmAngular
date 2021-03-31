import { ChangeDetectionStrategy, Component } from '@angular/core';
/**
 * @description
 * this component start the application
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /**
   * cette propriété ne sert plus a rien
   */
  title = 'crm-atos-avril';
}
