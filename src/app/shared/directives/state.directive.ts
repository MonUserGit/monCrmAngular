import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective implements OnChanges {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() {}
  ngOnChanges(): void {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}
// si item.state vaut CANCELED => state-canceled
// si item.state vaut OPTION => state-option
// si item.state vaut CONFIRMED => state-confirmed
// accéder à la propriété 'class' du host element <td>
// binder la propriété 'class' de mon <td> avec le string précédemment généré
