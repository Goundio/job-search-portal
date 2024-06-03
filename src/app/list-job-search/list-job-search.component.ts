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
  
  
  private mockHandlers = inject(JobSearchService);
  
  jobs = this.mockHandlers.ALL_JOBS;
  
  ngOnInit(): void {
    console.log(this.jobs);
  }

  getImageUrl(job: Job) {
    if (!job) return '';
    return job.companyLogo;
  }

  // async getAllJob() {
  //   const response = await fetch('/jobs');
  //   const job = await response.json();
  //   console.log(job);
  // }

}
