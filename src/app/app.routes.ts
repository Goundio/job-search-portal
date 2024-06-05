import { Routes } from '@angular/router';
import { ListJobSearchComponent } from './list-job-search/list-job-search.component';
import { ListJobSearchDetailComponent } from './list-job-search-detail/list-job-search-detail.component';
import { FavoriteJobComponent } from './favorite-job/favorite-job.component';

export const routes: Routes = [
    { path: 'job', component: ListJobSearchComponent, title: "Home - Job Search" },
    { path: 'job/:id', component: ListJobSearchDetailComponent, title: "Detail - Job Search" },
    { path: 'favorite', component: FavoriteJobComponent, title: "Favorite - Job Search" },
    { path: '', redirectTo: '/job', pathMatch: 'full' }
];
