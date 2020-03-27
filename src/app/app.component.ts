import { Component, Input } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string) {
    console.log(value);
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }

    return (randomLetter === enteredLetter) ? 'correct' : 'incorrect';
  }
}
