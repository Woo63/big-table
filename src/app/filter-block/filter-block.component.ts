import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {DayWeather, IDateRange, IDayWeather} from "../../assets/constants";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.css']
})
export class FilterBlockComponent implements OnInit{
  data: IDayWeather[] = []
  filteredData: IDayWeather[] = []
  @Input() word: string = ""
  @Input() dateRange: IDateRange = {
    from : null,
    to : null
  }
  @Input() reset?: () => void;
  @Input() key: 'First'|'Second' = 'First';

  constructor(public httpService: DataService) {}

  @Output() wordChange = new EventEmitter<string>();

  onWordChange(model: string){
    this.word = model;
    if (this.filteredData) this.filterData();
    window.localStorage.setItem(`word${this.key}`, model)
    this.wordChange.emit(model);
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.httpService.getData().subscribe((data: any) => {data.daily.forEach((item: any) => this.data.push(new DayWeather(
      item.clouds,
      item.dt*1000,
      item.moonrise,
      item.moonset,
      item.weather[0].description,
      item.weather[0].icon,
      item.weather[0].main)));
      this.filterData()})

  }

  filterData = () => {
    console.log('filterData in filter-block')
    let filteredData: IDayWeather[]=this.data;
    console.log(this.word)
    if (this.word){
      filteredData=this.data.filter((item) => item.main.startsWith(this.word))
      console.log(filteredData)
    }
    console.log(this.dateRange)
    if (this.dateRange.from && this.dateRange.to){
      const startDate = new Date(this.dateRange.from);
      const endDate = new Date(this.dateRange.to);
      filteredData=filteredData.filter((item) => { const nowDate= new Date(item.dt);
        return (nowDate>=startDate)&&(nowDate<=endDate)})
    }
    this.filteredData=filteredData
  }

  onClick(){
    if (this.reset) this.reset()
    this.filterData()
  }
}
