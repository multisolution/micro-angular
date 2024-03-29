import {Component} from '@angular/core';

@Component({
  selector: 'micro-angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-angular';
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  externalIncrement() {
    window.dispatchEvent(new CustomEvent('increment', {detail: 'angular'}));
    window.postMessage('increment', '*');
  }
}
