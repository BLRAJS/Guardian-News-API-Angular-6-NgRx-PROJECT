import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromNews from '../news/news.reducer';
import { NewsEffects } from '../news/news.effects';

export interface AppState {
  news: fromNews.State;
}

export const reducers: ActionReducerMap<AppState> = {

  news: fromNews.reducer,
};

export const effects = [
  NewsEffects
];



export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
