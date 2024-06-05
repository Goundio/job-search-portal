import { Injectable } from '@angular/core';
import { Job } from '../list-job-search/job.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteJobService {

  private key = 'favJobs';
  private fav: Job[] = [];

  constructor() {
    this.loadFav();
  }


  addFav(job: Job): void {
    if (!this.isFav(job)) {
      this.fav.push(job);
    }
    this.saveFav();
  }

  removeFav(job: Job): void {
    this.fav = this.fav.filter(fav => fav.id !== job.id);
    this.saveFav();
  }

  isFav(job: Job): boolean {
    return this.fav.some(fav => fav.id === job.id);
  }

  getFav(): Job[] {
    return this.fav;
  }

  private saveFav(): void {
    localStorage.setItem(this.key, JSON.stringify(this.fav));
  }

  private loadFav(): void {
    const favJson = localStorage.getItem(this.key);
    if (favJson) {
      this.fav = JSON.parse(favJson) as Job[];
    }
  }
}
