import {Component} from '@angular/core';
import {CurrencyListComponent} from "../../components/currency-list/currency-list.component";

@Component({
  selector: 'app-currency-exchange-page',
  standalone: true,
  imports: [
    CurrencyListComponent
  ],
  templateUrl: './currency-exchange-page.component.html',
  styleUrl: './currency-exchange-page.component.css'
})
export class CurrencyExchangePageComponent {

}
