import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../list-job-search/job.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-job.component.html',
  styleUrl: './favorite-job.component.css'
})
export class FavoriteJobComponent {

  @Input() jobs!: Job[];
  @Output() buy = new EventEmitter();
}
