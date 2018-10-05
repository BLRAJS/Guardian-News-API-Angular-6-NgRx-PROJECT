import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(store => store.news.selectedArticle)
      .subscribe(article => this.article = article);
  }

}
