import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Job } from './list-job-search/job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {

  private http = inject(HttpClient);

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs');
  }

  getJobDetail(value: any): Observable<Job> {
    return this.http.get<Job>('/jobs/' + value);
  }

}