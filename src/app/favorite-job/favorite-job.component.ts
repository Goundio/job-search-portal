import { Component, OnInit, inject } from '@angular/core';
import { Job } from '../list-job-search/job.model';
import { CommonModule } from '@angular/common';
import { FavoriteJobService } from './favorite-job.service';

@Component({
  selector: 'app-favorite-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-job.component.html',
  styleUrl: './favorite-job.component.css'
})
export class FavoriteJobComponent implements OnInit {

  jobs!: Job[];
  private favJobService = inject(FavoriteJobService);

  ngOnInit(): void {
    this.jobs = this.favJobService.getFav();
  }

}
