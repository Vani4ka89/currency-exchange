import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {ExchangeCurrencyService} from "../../services";
import {IPrivatCurrency} from "../../interfaces";

@Component({
  selector: 'app-currency-list',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
  ],
  templateUrl: './currency-list.component.html',
  styleUrl: './currency-list.component.css'
})
export class CurrencyListComponent implements OnInit {
  currencyList: IPrivatCurrency[];

  amount: number
  result: number
  fromCurrency: string = 'EUR'
  toCurrency: string = 'UAH'

  constructor(private exchangeCurrencyService: ExchangeCurrencyService) {
  }

  ngOnInit(): void {
    this.exchangeCurrencyService.getCurrencyList().subscribe(value => {
      this.currencyList = value.sort((a, b) => a.sale - b.sale).slice(4).reverse().slice(1)
    })
  }


  convert(): number {
    const fromRate = this.getRate(this.fromCurrency);
    const toRate = this.getRate(this.toCurrency);

    return this.result = (this.amount / toRate) * fromRate;
  }

  private getRate(currency: string): number {
    const selectedCurrency = this.currencyList.find(c => c.ccy === currency);
    return selectedCurrency ? selectedCurrency.sale : 1.0;
  }

}
