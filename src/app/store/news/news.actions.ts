import { Action } from '@ngrx/store';
import { Article } from '../../models/article';

export enum NewsActionTypes {
  LoadArticles = '[News] Load Articles',
  LoadArticlesSuccess = '[News] Load Articles Success',
  LoadArticlesFailed = '[News] Load Articles Failed',
  LoadArticle = '[News] Load Article',
  LoadArticleSuccess = '[News] Load Article Success',
  LoadArticleFailed = '[News] Load Article Failed'
}

export class LoadArticles implements Action {
  readonly type = NewsActionTypes.LoadArticles;
  constructor(public payload: any = null) { }
}

export class LoadArticlesSuccess implements Action {
  readonly type = NewsActionTypes.LoadArticlesSuccess;
  constructor(public payload: Article[]) { }
}

export class LoadArticlesFailed implements Action {
  readonly type = NewsActionTypes.LoadArticlesFailed;
  constructor(public payload: any) { }
}

export class LoadArticle implements Action {
  readonly type = NewsActionTypes.LoadArticle;
  constructor(public payload: string) { }
}

export class LoadArticleSuccess implements Action {
  readonly type = NewsActionTypes.LoadArticleSuccess;
  constructor(public payload: Article[]) { }
}

export class LoadArticleFailed implements Action {
  readonly type = NewsActionTypes.LoadArticleFailed;
  constructor(public payload: any) { }
}

export type NewsActions =
  LoadArticles | LoadArticlesSuccess | LoadArticlesFailed |
  LoadArticle | LoadArticleSuccess | LoadArticleFailed;
