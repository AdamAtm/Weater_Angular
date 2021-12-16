import { Weather } from "./weather";

export class History {
  date!: Date;
  weather!: Weather;

  constructor(date: Date, weather: Weather) {
    this.date = date;
    this.weather = weather;
  }
}