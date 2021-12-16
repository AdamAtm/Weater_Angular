import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { History } from '../models/history';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  histories!: History[]

  constructor(private historyService: HistoryService, private router: Router) { }

  ngOnInit(): void {
    this.histories = this.historyService.getHistories();
  }

  searchAgain(city: string) {
    this.router.navigate(['/'], {
      queryParams: { city },
    });
  }

}
