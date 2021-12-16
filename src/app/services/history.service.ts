import { Injectable } from '@angular/core';
import { History } from '../models/history';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  getHistories(): History[] {
    return JSON.parse(localStorage.getItem('histories') || '[]');
  }

  setHistories(histories: History[]) {
    localStorage.setItem('histories', JSON.stringify(histories));
  }

  addHistory(weather: Weather) {
    const histories = this.getHistories();

    const isAlreadyInHistory = histories.find(h => h.weather.name === weather.name) !== undefined;
    if (!isAlreadyInHistory) {
      const history = new History(new Date(), weather);
      histories.unshift(history);
      this.setHistories(histories);
    }
  }
}
