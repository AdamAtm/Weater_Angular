import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();

  search: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleSerch() {
    if (this.search.length > 0) {
      this.onSearch.emit(this.search);
    }
  }

}
