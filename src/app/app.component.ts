import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Retro Bar Code';
  bars: Array<string> = [];

  createBars: Function = function() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    for ( let idx = 0; idx < 10; idx += 1 ) {
      this.bars[idx] = colors[Math.floor(Math.random() * 6)];
    }
  }

  ngOnInit() {
    this.createBars();
  }

}
