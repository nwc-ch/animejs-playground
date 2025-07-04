import {AfterViewInit, Component} from '@angular/core';

import { animate } from 'animejs';

@Component({
  selector: 'app-root',
  imports: [],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    animate( ['#animate-001'],
      {
        translateX: 250,
        duration: 1000,
        easing: 'easeOutBack',
      }
    );
  }

}
