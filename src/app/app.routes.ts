import { Routes } from '@angular/router';
import { ListJobSearchComponent } from './list-job-search/list-job-search.component';
import { JobSearchDetailComponent } from './job-search-detail/job-search-detail.component';
import { FavoriteJobComponent } from './favorite-job/favorite-job.component';

export const routes: Routes = [
    { path: 'job', component: ListJobSearchComponent, title: "Home - Job Search" },
    { path: 'job/:id', component: JobSearchDetailComponent, title: "Detail - Job Search" },
    { path: 'favorite', component: FavoriteJobComponent, title: "Favorite - Job Search" },
    { path: '', redirectTo: '/job', pathMatch: 'full' }
];
