import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // search bar comp that gets the user input for the keyword
  public searchKeyword: string;
  public keywordControl = new FormControl();
  @Output() keywordOutput: EventEmitter<any> = new EventEmitter();

  public changed = '';

  constructor() { }

  ngOnInit() {
    this.searchKeyword = '';
    // debounceTime 1 sec, for delaying getting user input
    this.keywordControl.valueChanges.debounceTime(1000).subscribe((value) => {
      this.searchKeyword = value;
      this.keywordOutput.emit(value);
    });
  }

}
