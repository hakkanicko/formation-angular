import { Component } from '@angular/core';
import { ReactiveService } from './reactive/reactive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab';
  open = false;
  constructor(public rs: ReactiveService) {}
}
