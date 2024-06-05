import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Job } from './job.model';
import { JobSearchService } from './job-search.service';
import { FavoriteJobService } from '../favorite-job/favorite-job.service';

@Component({
  selector: 'app-list-job-search',
  standalone: true,
  imports: [CommonModule,
    RouterLink
  ],
  templateUrl: './list-job-search.component.html',
  styleUrl: './list-job-search.component.css',
})
export class ListJobSearchComponent implements OnInit {

  jobs: Job[] = [];

  private mockHandlers = inject(JobSearchService);
  private favJobService = inject(FavoriteJobService);

  ngOnInit(): void {
    this.mockHandlers.getJobs().subscribe((job) => {
      this.jobs = job;
    });
  }

  manageFav(job: Job): void {
    if (this.favJobService.isFav(job)) {
      this.favJobService.removeFav(job);
    } else {
      this.favJobService.addFav(job);
    }
  }

  isFav(job: Job): boolean {
    return this.favJobService.isFav(job);
  }

  clearFav(): void {
    localStorage.removeItem('favJobs');
    window.location.reload(); 
  }

}
