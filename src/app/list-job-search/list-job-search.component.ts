import { Component, OnInit, inject } from '@angular/core';
import { JobSearchService } from '../job-search.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Job } from './job.model';

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

  isFavorite: boolean = false;
  jobs: any;
  fav: Job[] = [];
  filter!: number;


  private mockHandlers = inject(JobSearchService);

  ngOnInit(): void {
    this.mockHandlers.getJobs().subscribe((job) => {
      this.jobs = job;
    });
  }

  getFavorite(value: any) {
    this.fav.push(value);
    console.log(this.fav);
  }

}
