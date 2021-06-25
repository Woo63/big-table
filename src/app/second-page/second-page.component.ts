import {Component} from '@angular/core';
import {IDateRange, IDayWeather} from "../../assets/constants";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  providers: [DataService]
})
export class SecondPageComponent {
  key: 'First' | 'Second' = 'Second';
  data: IDayWeather[] = [];
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

