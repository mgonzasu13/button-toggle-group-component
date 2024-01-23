import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedOption: string = '';

  handleOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
