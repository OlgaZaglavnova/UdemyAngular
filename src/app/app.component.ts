import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isWarning = false;

  toggleIsWarning(): void {
    this.isWarning = !this.isWarning;
  }
}
