import { Component, OnInit } from '@angular/core';
import { ShopVino } from '../../../../model/shop';
import { DataService } from '../../../../service/shop.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-credit',
    templateUrl: './edit-credit.component.html'
})
/** edit-credit component*/
export class EditCreditComponent implements OnInit {

  id: number = 0;
  wine: ShopVino;    // изменяемый объект
  loaded: boolean = false;

  constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params["id"];
  }

  ngOnInit() {
    if (this.id)
      this.dataService.getProduct(this.id)
        .subscribe((data: ShopVino) => {
          this.wine = data;
          if (this.wine != null) this.loaded = true;
        });
  }

  save() {
    this.dataService.updateProduct(this.wine).subscribe(data => this.router.navigateByUrl("/wine-list"));
  }
}
