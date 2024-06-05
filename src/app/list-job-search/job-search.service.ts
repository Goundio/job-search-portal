import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job.model';

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