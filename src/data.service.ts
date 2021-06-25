import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {DayWeather, IDayWeather} from "./assets/constants";

@Injectable()
export class DataService{
  constructor(private http: HttpClient) {}

  getData(){
    return this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat=53.195873&lon=50.100193&units=metric&exclude=hourly,alerts,minutely,current&appid=373651eef091af2d1670e866f24aa876")
  }
}
