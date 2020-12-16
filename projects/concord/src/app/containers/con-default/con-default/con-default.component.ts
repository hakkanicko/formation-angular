import { Component, OnInit } from '@angular/core';
import { AnyCardContent } from 'projects/any/src/public-api';

@Component({
  selector: 'app-con-default',
  templateUrl: './con-default.component.html',
  styleUrls: ['./con-default.component.scss']
})
export class ConDefaultComponent implements OnInit {

  cards: AnyCardContent[] = [
    {
      header: { title: "Jolie titre" },
      image: "http://unsplash.it/300",
      text: "Une bien belle carte",
      actions: [{ label: "Like", action: { type: "LIKE" } }],
    },
    {
      header: { title: "Jolie 2ème titre", subtitle: "Sous titre" },
      image: "http://unsplash.it/300",
      text: "Une autre belle carte",
      actions: [{ label: "Like", action: { type: "LIKE" } }],
    },
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
