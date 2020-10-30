import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopVino } from 'src/model/shop';

@Injectable()
export class DataService {

  private url = "/api/shops";

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get(this.url);
  }

  getProduct(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createProduct(shopVino: ShopVino) {
    return this.http.post(this.url, shopVino);
  }

  updateProduct(shopVino: ShopVino) {
    return this.http.put(this.url, shopVino);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
