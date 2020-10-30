import { Component, Input } from '@angular/core';
import { ShopVino } from '../../../../model/shop';

@Component({
    selector: 'wine-form',
    templateUrl: './wine-form.component.html',
    styleUrls: ['./wine-form.component.scss']
})

export class WineFormComponent {

  @Input() wine: ShopVino;

  constructor() { }

}
