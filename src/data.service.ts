import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {DayWeather, IDayWeather} from "./assets/constants";

@Injectable()
export class DataService{
  constructor(private http: HttpClient) {}

  getData(){
    // const response=this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat=53.195873&lon=50.100193&units=metric&exclude=hourly,alerts,minutely,current&appid=373651eef091af2d1670e866f24aa876")
    // response.subscribe((data: any) => data.daily.forEach((item: any) => this.data.push(new DayWeather(item.clouds, item.dt*1000, item.moonrise, item.moonset, item.weather.description, item.weather.icon, item.weather.main))))
    return this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat=53.195873&lon=50.100193&units=metric&exclude=hourly,alerts,minutely,current&appid=373651eef091af2d1670e866f24aa876")
  }
}
