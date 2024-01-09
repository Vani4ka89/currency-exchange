import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constants";
import {IPrivatCurrency} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ExchangeCurrencyService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getCurrencyList(): Observable<IPrivatCurrency[]> {
    return this.httpClient.get<IPrivatCurrency[]>(`https://api.allorigins.win/raw?url=${encodeURIComponent(urls.exchange.currencyList)}`)
  }

}
