import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public searchKeyword: string;
  @Output() keywordOutput: EventEmitter<any> = new EventEmitter();

  public changed = '';

  constructor() { }

  ngOnInit() {

  }

  public update(value) {
    this.keywordOutput.emit(value);
  }

}
