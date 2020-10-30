import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/shop.service';
import { ShopVino } from 'src/model/shop';

@Component({
  selector: 'shop-list',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopVinoComponent implements OnInit {

  shopVinos: ShopVino[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.getProducts().subscribe((data: ShopVino[]) => this.shopVinos = data);
  }

  delete(id: number) {
    this.dataService.deleteProduct(id).subscribe(data => this.load());
  }
}
