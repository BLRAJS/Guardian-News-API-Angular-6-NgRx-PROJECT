import { Component, OnInit } from '@angular/core';
import { AppState } from './store/reducers';
import { Store } from '@ngrx/store';
import { LoadArticles } from './store/news/news.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // On application init we start action for loading all articles
    // After that it will raised LoadArticles effect in (news.effects.ts)
    this.store.dispatch(new LoadArticles());
  }
}
