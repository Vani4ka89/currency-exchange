import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

import {urls} from "../constants";
import {IPrivatCurrency} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ExchangeCurrencyService {
  private currencyValuesSubject = new BehaviorSubject<IPrivatCurrency>(null);

  constructor(private readonly httpClient: HttpClient) {
  }

  getCurrencyList(): Observable<IPrivatCurrency[]> {
    return this.httpClient.get<IPrivatCurrency[]>(`https://api.allorigins.win/raw?url=${encodeURIComponent(urls.exchange.currencyList)}`)
  }

  getCurrencyForUse(): Observable<IPrivatCurrency> {
    return this.currencyValuesSubject.asObservable()
  }

  setCurrencyForUse(currency: IPrivatCurrency): void {
    this.currencyValuesSubject.next(currency)
  }
}
