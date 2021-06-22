import {Component, Input} from '@angular/core';
import {IDayWeather} from "../../assets/constants";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  @Input() data!: IDayWeather[] | undefined;
}
