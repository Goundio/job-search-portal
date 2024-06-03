import { Component, inject } from '@angular/core';
import { Job } from '../list-job-search/job.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JobSearchService } from '../job-search.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-job-search-detail',
  standalone: true,
  imports: [RouterLink,
    CommonModule
  ],
  templateUrl: './list-job-search-detail.component.html',
  styleUrl: './list-job-search-detail.component.css'
})
export class ListJobSearchDetailComponent {

  job: Job | undefined;
  private http = inject(HttpClient);
  private jobUrl = '/jobs';

  constructor(private route: ActivatedRoute, private jobService: JobSearchService) { }

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.job = this.jobService.getJob(jobId);
    const jobTest$ = this.http.get<Job[]>(this.jobUrl);
    console.log(jobTest$);
  }


  //  async getAllJob(id) {
  //   const response = await fetch('/jobs/:id', ({ params }) );
  //   const job = await response.json();
  //   console.log(job);
  // }

  getImageUrl(job: Job) {
    if (!job) return '';
    return job.companyLogo;
  }

}
