import { Component, OnInit } from '@angular/core';


/** 
 * Ce composant est une composant par defaut.
 */
@Component({
  selector: 'app-comp-default',
  templateUrl: './comp-default.component.html',
  styleUrls: ['./comp-default.component.scss']
})
export class CompDefaultComponent implements OnInit {

  /**
   * Injection
   */
  constructor() { }

  ngOnInit(): void {
  }

}
