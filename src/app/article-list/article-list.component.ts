import { ARTICLES } from './../mock-articles';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

 article: Article[] = [];

  constructor() { }

  ngOnInit(): void {
    this.article = ARTICLES;
    console.log(this.article);
  }

}
