import {Component, Input} from '@angular/core';
import {IDateRange, IDayWeather} from "../../assets/constants";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
  providers: [DataService]
})
export class SecondPageComponent {
  key: 'First'|'Second' = 'Second';
  data: IDayWeather[] = [];
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

