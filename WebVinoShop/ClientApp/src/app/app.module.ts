import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { ShopVinoComponent } from './shop/shop/shop.component';
import { CardWineComponent } from './shop/card-wine/card-wine.component';
import { WineFormComponent } from './shop/shop/wine-form/wine-form.component';
import { CreateWineComponent } from './shop/shop/create-wine/create-wine.component';
import { EditCreditComponent } from './shop/shop/edit-credit/edit-credit.component';


import { DataService } from '../service/shop.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    ShopVinoComponent,
    CardWineComponent,
    CreateWineComponent,
    WineFormComponent,
    EditCreditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CardWineComponent, pathMatch: 'full' },
      { path: 'shop-list', component: ShopVinoComponent },
      { path: 'create', component: CreateWineComponent },
      { path: 'edit/:id', component: EditCreditComponent }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
