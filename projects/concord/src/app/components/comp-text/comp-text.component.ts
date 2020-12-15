import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-text',
  templateUrl: './comp-text.component.html',
  styleUrls: ['./comp-text.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class CompTextComponent implements OnInit {
  text = '';
  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.text += '😜', 1000)
  }

}
