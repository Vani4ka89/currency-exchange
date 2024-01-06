import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

import {IPrivatCurrency} from "../../interfaces";
import {ExchangeCurrencyService} from "../../services";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  currencyList: IPrivatCurrency[];

  constructor(private readonly exchangeCurrencyService: ExchangeCurrencyService) {
  }

  ngOnInit(): void {
    this.exchangeCurrencyService.getCurrencyList().subscribe(value => {
        this.currencyList = value.sort((a, b) => a.sale - b.sale).slice(4).reverse().slice(1)
      }
    )
  }
}
