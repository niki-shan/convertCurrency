import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService implements OnInit{
baseUrl : any = `https://v6.exchangerate-api.com/v6/715f95325581575819f3bb2f/latest/USD`
  apiKey = `715f95325581575819f3bb2f`
  currencyUrl = `https://v6.exchangerate-api.com/v6`
  constructor(private _http : HttpClient) { }
  ngOnInit(): void {

    console.log(this.baseUrl);
    
  }


  fetchAllData():Observable<any>{
      return this._http.get<any>(this.baseUrl)
      .pipe(
        map(res=>{
          let arr = []
          for(let key in res.conversion_rates){
            
            arr.push(key)

          }
          return arr
        })
      )
  }


  fetchcurrencyurl(baseurl : string){
    let currUrl = `${this.currencyUrl}/${this.apiKey}/latest/USD`
    return this._http.get<any>(currUrl)
  }
}
