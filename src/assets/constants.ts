export interface IDayWeather {
  clouds: number
  dt: string
  moonrise: number
  moonset: number
  description: string
  icon: string
  main: string
}

export class DayWeather{
  public clouds: number;
  public dt: string;
  public icon: string;
  public description: string;
  public moonset: number;
  public moonrise: number;
  public main: string;
  constructor(clouds: number, dt: number, moonrise: number, moonset: number, description: string, icon: string, main: string ){
    this.clouds=clouds;
    this.dt=new Date(dt).toDateString()
    this.moonrise=moonrise
    this.moonset=moonset
    this.description=description
    this.icon=`http://openweathermap.org/img/wn/${icon}@2x.png`
    this.main=main
  }
}

export interface IDateRange{
  from: Date | null,
  to: Date | null
}
