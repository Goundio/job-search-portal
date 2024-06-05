import { Component, OnInit, inject } from '@angular/core';
import { Job } from '../list-job-search/job.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobSearchService } from '../list-job-search/job-search.service';

@Component({
  selector: 'app-job-search-detail',
  standalone: true,
  imports: [RouterLink,
    CommonModule
  ],
  templateUrl: './job-search-detail.component.html',
  styleUrl: './job-search-detail.component.css'
})
export class JobSearchDetailComponent implements OnInit {

  job!: Job;

  private mockHandlers = inject(JobSearchService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.mockHandlers.getJobDetail(jobId).subscribe((job) => {
      this.job = job;
    });
  }

}
