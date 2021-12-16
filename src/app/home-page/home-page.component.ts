import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../models/weather';
import { HistoryService } from '../services/history.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  weather?: Weather;
  error?: any

  constructor(private route: ActivatedRoute, private weatherService: WeatherService, private historyService: HistoryService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const city = params['city'];
      if (city) {
        this.weatherService.getWeather(city).subscribe({
          next: (weather: Weather) => {
            this.weather = weather;
            this.historyService.addHistory(weather);
            this.error = undefined;
          },
          error: (err) => this.error = err,
        });
      }
    });
  }

}
