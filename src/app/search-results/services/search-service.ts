import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class SearchService {

  private searchUrl = 'http://localhost:8080/api/search?keyword=';

  constructor(private httpClient: HttpClient) {
  }

  getArtists(keyword): Observable<any> {
    const url = this.searchUrl + keyword;
    return this.httpClient.get(url).delay(1000);
  }

}
