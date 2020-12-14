import { Component, OnInit } from '@angular/core';
import { ReactiveService } from '../reactive.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor(public rs: ReactiveService) {
    rs.data$.subscribe(d => console.log(d));
  }

  ngOnInit(): void {
  }

}
