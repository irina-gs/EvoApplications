import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnDestroy {
  progressValue = 0
  private intervalId: any

  startProgress(): void {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        if (this.progressValue < 100) {
          this.progressValue += 1
        } else {
          this.stopProgress()
        }
      }, 100)
    }
  }

  stopProgress(): void {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  resetProgress(): void {
    this.stopProgress()
    this.progressValue = 0
  }

  ngOnDestroy(): void {
    this.stopProgress()
  }
}
