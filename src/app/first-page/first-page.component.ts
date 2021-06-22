import {Component} from '@angular/core';
import { DataService } from "../../data.service";
import {IDateRange, IDayWeather} from "../../assets/constants";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  providers: [DataService]
})
export class FirstPageComponent{
  data: IDayWeather[] = [];
  key: 'First' | 'Second' = 'First'
  word: string = localStorage.getItem(`word${this.key}`) || ""
  dateRange: IDateRange = {
    from : null,
    to : null
  }

  constructor() {
    if (localStorage.getItem(`dateFrom${this.key}`)){
      // @ts-ignore
      this.dateRange.from = localStorage.getItem(`dateFrom${this.key}`)
    }
    if (localStorage.getItem(`dateTo${this.key}`)){
      // @ts-ignore
      this.dateRange.to = localStorage.getItem(`dateTo${this.key}`)
    }
  }

  reset(): void{
    console.log('reset')
    this.word="";
    this.dateRange = {
      from : null,
      to : null
    }
    window.localStorage.removeItem(`dateFrom${this.key}`)
    window.localStorage.removeItem(`dateTo${this.key}`)
    window.localStorage.removeItem(`word${this.key}`)
  }
}
