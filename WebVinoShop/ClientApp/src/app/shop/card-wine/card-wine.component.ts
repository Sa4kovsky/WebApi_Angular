import { Component, OnInit } from '@angular/core';

import { ShopVino } from '../../../model/shop';

import { DataService } from '../../../service/shop.service';

@Component({
    selector: 'app-card-wine',
    templateUrl: './card-wine.component.html',
    styleUrls: ['./card-wine.component.scss']
})
/** card-wine component*/
export class CardWineComponent implements OnInit {

  shopVinos: ShopVino[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.getProducts().subscribe((data: ShopVino[]) => this.shopVinos = data);
  }
}
