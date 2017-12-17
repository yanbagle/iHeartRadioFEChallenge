import {Component, Input, OnInit} from '@angular/core';
import {Artist} from '../models/artist';

@Component({
  selector: 'app-artist-display',
  templateUrl: './artist-display.component.html',
  styleUrls: ['./artist-display.component.css']
})
export class ArtistDisplayComponent implements OnInit {

  // comp for displaying the artists' results
  @Input() artists: Artist[];

  constructor() { }

  ngOnInit() {
  }

}
