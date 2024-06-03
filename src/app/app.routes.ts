import { Routes } from '@angular/router';
import { ListJobSearchComponent } from './list-job-search/list-job-search.component';
import { ListJobSearchDetailComponent } from './list-job-search-detail/list-job-search-detail.component';

export const routes: Routes = [
    { path: '', component: ListJobSearchComponent },
    { path: 'job/:id', component: ListJobSearchDetailComponent }
];
