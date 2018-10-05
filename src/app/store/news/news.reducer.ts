import { NewsActions, NewsActionTypes } from './news.actions';
import { Article } from '../../models/article';

export interface State {
  articleList: Article[];
  selectedArticle: Article;
  loading: boolean;
  error: any;
}

export const initialState: State = {
  articleList: [],
  selectedArticle: null,
  loading: false,
  error: null
};

/** Helper function for create new state */
const newState = function (state, newData) {
  return Object.assign({}, state, newData);
};

export function reducer(state = initialState, action: NewsActions): State {
  switch (action.type) {

    case NewsActionTypes.LoadArticles:
      return newState(state, { loading: true });

    case NewsActionTypes.LoadArticle:
      return newState(state, { loading: true });

    case NewsActionTypes.LoadArticlesSuccess:
      return newState(state, { articleList: action.payload, loading: false });

    case NewsActionTypes.LoadArticleSuccess:
      return newState(state, { selectedArticle: action.payload, loading: false });

    case NewsActionTypes.LoadArticleFailed || NewsActionTypes.LoadArticlesFailed:
      return newState(state, { error: action.payload });

    default:
      return state;
  }
}
