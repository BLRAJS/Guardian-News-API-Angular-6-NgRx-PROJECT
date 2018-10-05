import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Article } from '../models/article';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  get(id: string): Observable<Article> {
    const url = environment.apiEndpoint
      + id + '?api-key='
      + environment.apiKey
      + '&show-fields=body,byline,thumbnail';

    // We have to map response in our model so we use map operator
    return this.http.get(url)
      .pipe(
        map((response: any) => {
          const s = response.response.content;
          return <Article>{
            id: s.id,
            webTitle: s.webTitle,
            webPublicationDate: new Date(s.webPublicationDate),
            body: s.fields.body,
            byline: s.fields.byline,
            thumbnail: s.fields.thumbnail
          };
        }),
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }

  getList(): Observable<Article[]> {
    const url = environment.apiEndpoint + 'search?api-key=' + environment.apiKey;

    // We have to map response in our model so we use map operator
    return this.http.get(url)
      .pipe(
        map((response: any) => {
          return response.response.results.map(s =>
            <Article>{
              id: s.id,
              webTitle: s.webTitle
            });
        }),
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }
}
