import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IDateRange} from "../../assets/constants";

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent{
  @Input() dateRange: IDateRange = {
    from: null,
    to: null
  };
  @Input() filteredData?: () => void;
  @Input() key: 'First'|'Second' = 'First';

  @Output() dateRangeChange = new EventEmitter<IDateRange>();

  onDateFromChange(model: Date){
    this.dateRange.from = model;
    if (this.filteredData) this.filteredData();
    window.localStorage.setItem(`dateFrom${this.key}`, new Date(model).toISOString().substr(0, 10))
    console.log(window.localStorage.getItem(`dateFrom${this.key}`))
    this.dateRangeChange.emit(this.dateRange);
  }
  onDateToChange(model: Date){
    this.dateRange.to = model;
    if (this.filteredData) this.filteredData();
    window.localStorage.setItem(`dateTo${this.key}`, new Date(model).toISOString().substr(0, 10))
    this.dateRangeChange.emit(this.dateRange);
  }

}
