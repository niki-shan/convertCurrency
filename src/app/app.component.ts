import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'convertCurrency';
  contryArr ! : Array<any>
  fromAmount  : number = 1
  resultAmount : number = 0
  selectCurrency ! : any
  convertedCurrency ! : any
constructor(private _currency : CurrencyService){}
  ngOnInit(): void {
      let posturl = this._currency.fetchAllData().subscribe(res=>{
        this.contryArr = res
       ;
        
      })
       
  }


  onConvert(){
 this._currency.fetchcurrencyurl(this.selectCurrency)
    .subscribe(res=>{
      console.log(res);
      this.resultAmount = res.conversion_rates[this.convertedCurrency] * this.fromAmount
      console.log(this.resultAmount);
      
    })
  }
}
