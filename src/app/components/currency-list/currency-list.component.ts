import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {ExchangeCurrencyService} from "../../services";
import {IPrivatCurrency} from "../../interfaces";

@Component({
  selector: 'app-currency-list',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf,
  ],
  templateUrl: './currency-list.component.html',
  styleUrl: './currency-list.component.css'
})
export class CurrencyListComponent implements OnInit {
  currencyList: IPrivatCurrency[];

  amount: number
  result: number = null
  toggle: boolean = null
  fromCurrency: string = 'USD'
  toCurrency: string = 'UAH'

  constructor(private exchangeCurrencyService: ExchangeCurrencyService) {
  }

  ngOnInit(): void {
    this.exchangeCurrencyService.getCurrencyList().subscribe(value => {
      this.currencyList = value.sort((a, b) => a.sale - b.sale).slice(4).reverse()
    })
  }


  convert(): number {
    const fromRate = this.getRate(this.fromCurrency);
    const toRate = this.getRate(this.toCurrency);

    return this.result = (this.amount / toRate) * fromRate;
  }

  getRate(currency: string): number {
    const selectedCurrency = this.currencyList.find(c => c.ccy === currency);
    return this.toggle ? (selectedCurrency ? selectedCurrency.buy : 1.0) : (selectedCurrency ? selectedCurrency.sale : 1.0);
  }

  turnMode() {
    this.toggle = !this.toggle;
  }

  reset() {
    this.amount = null;
  }
}
