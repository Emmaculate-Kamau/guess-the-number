import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deviation!: number | null;
  noOfTries!: number;
  guess!: number | null;
  original!: number;

  constructor() {
    this.initializeGame();
  }

  initializeGame() {
    this.noOfTries = 0;
    this.original = Math.floor((Math.random() * 1000) + 1);
    console.info("original number is ", this.original);
    this.guess = null;
    this.deviation = null;
  }
  verifyGuess() {
    if (this.guess !== null) {
      this.deviation = this.original - this.guess;
    }
    this.noOfTries = this.noOfTries + 1;
  }

  guessInputValueChanges(inputEvent: any){
    const inputedGuess = parseInt(inputEvent.target.value);

    this.guess=inputedGuess;
  }
}

