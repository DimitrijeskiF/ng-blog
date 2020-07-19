import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'article', component: ArticleListComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: ArticleListComponent},
  {path: ':key', component: ArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
