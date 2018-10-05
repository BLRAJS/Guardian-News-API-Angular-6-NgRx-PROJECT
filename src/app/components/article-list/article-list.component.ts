import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { LoadArticle } from '../../store/news/news.actions';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articleList: Article[];

  /** Only need for decoration of selected news on list */
  selectedId: string;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(store => store.news.articleList)
      .subscribe(articles => this.articleList = articles);

    // Only need for decoration of selected news on list
    this.store.select(store => store.news.selectedArticle)
      .subscribe(a => a ? this.selectedId = a.id : '');
  }

  selectArticle(id) {
    this.store.dispatch(new LoadArticle(id));
  }
}
