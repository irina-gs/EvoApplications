import { Component } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterArray: number[] = []
  randomNumbersArray: string[] = []

  counterSubscription$!: Subscription
  randomNumbersSubscription$!: Subscription

  isEnableStartButton: boolean = true
  isEnableStopButton: boolean = false
  isEnableStopButtonForCounter: boolean = false
  isEnableStopButtonForRandom: boolean = false

  startStreams() {
    this.counterArray = []
    this.randomNumbersArray = []

    const interval$ = interval(2000)

    this.counterSubscription$ = interval$.subscribe((value) => {
      this.counterArray.push(value)
    })
    this.randomNumbersSubscription$ = interval$.pipe(
      map(() => `Random Value: ${Math.floor(Math.random() * 1000)}`)
    )
    .subscribe((value) => {
      this.randomNumbersArray.push(value)
    })

    this.isEnableStartButton = false
    this.isEnableStopButton = true
    this.isEnableStopButtonForCounter = true
    this.isEnableStopButtonForRandom = true
  }

  stopCounterStream() {
    this.counterSubscription$.unsubscribe()

    this.isEnableStopButtonForCounter = false
    if (!this.isEnableStopButtonForRandom) {
      this.isEnableStartButton = true
      this.isEnableStopButton = false
    }
  }

  stopRandomNumbersStream() {
    this.randomNumbersSubscription$.unsubscribe()

    this.isEnableStopButtonForRandom = false
    if (!this.isEnableStopButtonForCounter) {
      this.isEnableStartButton = true
      this.isEnableStopButton = false
    }
  }

  stopStreams() {
    this.stopCounterStream()
    this.stopRandomNumbersStream()
  }
}
