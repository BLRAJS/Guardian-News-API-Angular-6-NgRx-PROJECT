import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NewsActionTypes, LoadArticle, LoadArticlesSuccess } from './news.actions';

import { map, switchMap, catchError } from 'rxjs/operators';
import { ArticleService } from '../../services/article.service';
import { of as observableOf } from 'rxjs';

@Injectable()
export class NewsEffects {

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) { }

  /** Effect who call service for get list of artcles and raise action LoadArticlesSuccess  */
  @Effect() loadArticles$ = this.actions$
    .ofType(NewsActionTypes.LoadArticles)
    .pipe(
      switchMap(action => this.articleService.getList().pipe(
        // If successful, dispatch success action with result
        map(res => ({ type: NewsActionTypes.LoadArticlesSuccess, payload: res })),
        // If request fails, dispatch failed action
        catchError((err) => observableOf({ type: NewsActionTypes.LoadArticlesFailed, payload: err }))
      ))
    );

  /** Effect who call service for get specific article by id and raise action LoadArticleSuccess  */
  @Effect() loadArticle$ = this.actions$
    .ofType(NewsActionTypes.LoadArticle)
    .pipe(
      switchMap((action: LoadArticle) => this.articleService.get(action.payload).pipe(
        // If successful, dispatch success action with result
        map(res => ({ type: NewsActionTypes.LoadArticleSuccess, payload: res })),
        // If request fails, dispatch failed action
        catchError((err) => observableOf({ type: NewsActionTypes.LoadArticleFailed, payload: err }))
      ))
    );

  /** Effect who call service for get newest article after loading all articles  */
  @Effect() loadArticlesSuccess$ = this.actions$
    .ofType(NewsActionTypes.LoadArticlesSuccess)
    .pipe(
      switchMap((action: LoadArticlesSuccess) => this.articleService.get(action.payload[0].id).pipe(
        // If successful, dispatch success action with result
        map(res => ({ type: NewsActionTypes.LoadArticleSuccess, payload: res })),
        // If request fails, dispatch failed action
        catchError((err) => observableOf({ type: NewsActionTypes.LoadArticleFailed, payload: err }))
      ))
    );
}
