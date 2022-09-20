import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deviation!: number | null;
  noOfTries!: number;
  guess!: number;
  original!: number;

  constructor() { }
}
