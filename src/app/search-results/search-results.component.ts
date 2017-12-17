import { Component, OnInit } from '@angular/core';
import {SearchService} from './services/search-service';
import {Artist} from './models/artist';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private service: SearchService) { }

  public artists: Artist[] = [];
  private imageUrl = 'http://iscale.iheart.com/catalog/artist/';

  ngOnInit() {}

  public search(keyword): void {
    this.service.getArtists(keyword).subscribe((res) => {
      this.artists = [];
      for (let i = 0; i < 6; i++) {
        if (i < res.artists.length) {
          const newArtist = {} as Artist;
          newArtist.name = res.artists[i].artistName;
          newArtist.imageUrl = this.imageUrl + res.artists[i].artistId + '?ops=fit(250,0)';
          this.artists.push(newArtist);
        }
      }
    });
  }

}
