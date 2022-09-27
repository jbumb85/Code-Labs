import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  width: number = 250;
  height: number = 280;

  constructor(){
    setTimeout(() => {
      this.width = 500;
      }, 1000)
  }
}
