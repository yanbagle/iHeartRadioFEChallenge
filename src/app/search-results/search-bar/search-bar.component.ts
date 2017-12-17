import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public searchKeyword: string;
  public keywordControl = new FormControl();
  @Output() keywordOutput: EventEmitter<any> = new EventEmitter();

  public changed = '';

  constructor() { }

  ngOnInit() {
    this.searchKeyword = '';
    this.keywordControl.valueChanges.debounceTime(1000).subscribe((value) => {
      this.searchKeyword = value;
      this.keywordOutput.emit(value);
    });
  }

}
