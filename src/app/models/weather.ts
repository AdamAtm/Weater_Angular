export class Weather {
  name!: string;
  weather!: WeatherDescription[];
  main!: WeatherMain;
}

class WeatherDescription {
  description!: string;
  icon!: string;
}

class WeatherMain {
  temp!: number;
  temp_min!: number;
  temp_max!: number;
  feels_like!: number;
}