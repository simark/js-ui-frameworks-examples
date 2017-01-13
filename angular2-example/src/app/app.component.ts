import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textBoxModel = '';
  words = [];

  constructor() {
    /* Initial value of our model. */
    this.textBoxModel = 'Hello World!';
    this.words = this.textBoxModel.split(' ');
  }

  textBoxChange() {
    this.words = this.textBoxModel.split(' ');
  }
}
