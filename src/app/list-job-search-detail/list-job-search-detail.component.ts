import { Component, OnInit, inject } from '@angular/core';
import { Job } from '../list-job-search/job.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JobSearchService } from '../job-search.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-job-search-detail',
  standalone: true,
  imports: [RouterLink,
    CommonModule
  ],
  templateUrl: './list-job-search-detail.component.html',
  styleUrl: './list-job-search-detail.component.css'
})
export class ListJobSearchDetailComponent implements OnInit {

  job!: Job;

  private mockHandlers = inject(JobSearchService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    this.mockHandlers.getJobDetail(jobId).subscribe((job) => {
      this.job = job;
    });
  }

}
