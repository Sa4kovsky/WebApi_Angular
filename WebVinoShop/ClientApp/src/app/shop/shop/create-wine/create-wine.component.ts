import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ShopVino } from '../../../../model/shop';
import { DataService } from '../../../../service/shop.service';

@Component({
    selector: 'app-create-wine',
    templateUrl: './create-wine.component.html'
})

export class CreateWineComponent {

  wine: ShopVino = new ShopVino();    // добавляемый объект

  constructor(private dataService: DataService, private router: Router) { }

  save() {
    this.dataService.createProduct(this.wine).subscribe(data => this.router.navigateByUrl("/shop-list"));
  }
}
