import {Component} from '@angular/core';
import {DataService} from "../../data.service";
import {IDateRange, IDayWeather} from "../../assets/constants";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  providers: [DataService]
})
export class FirstPageComponent {
  data: IDayWeather[] = [];
  key: 'First' | 'Second' = 'First'
  word: string = localStorage.getItem(`word${this.key}`) || ""
  dateRange: IDateRange = {
    from: null,
    to: null
  }

  constructor() {
    let dateFrom: string | null | Date = localStorage.getItem(`dateFrom${this.key}`)
    if (dateFrom !== null) {
      dateFrom = new Date(dateFrom)
    }
    let dateTo: string | null | Date = localStorage.getItem(`dateTo${this.key}`)
    if (dateTo !== null) {
      dateTo = new Date(dateTo)
    }
    this.dateRange.from = dateFrom
    this.dateRange.to = dateTo
    console.log(dateFrom, '  ', dateTo)
  }

  reset(): void {
    this.word = "";
    this.dateRange = {
      from: null,
      to: null
    }
    window.localStorage.removeItem(`dateFrom${this.key}`)
    window.localStorage.removeItem(`dateTo${this.key}`)
    window.localStorage.removeItem(`word${this.key}`)
  }
}
