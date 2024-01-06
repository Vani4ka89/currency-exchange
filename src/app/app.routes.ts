import {Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {CurrencyExchangePageComponent} from "./pages/currency-exchange-page/currency-exchange-page.component";

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'currency/exchange', pathMatch: 'full'},
      {path: 'currency/exchange', component: CurrencyExchangePageComponent}
    ]
  }
];
