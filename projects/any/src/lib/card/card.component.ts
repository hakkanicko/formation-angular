import { Component, Inject, Input, OnInit, Optional, Self, SkipSelf } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { CnDispatcher } from "../interfaces/cn-dispatcher";
import { ANY_DISPATCHER } from "../tokens/dispatcher.token";
import { AnyCardContent } from "./any-card-content";

export class FakeDispatcher implements CnDispatcher{
  state$ = new BehaviorSubject({});
  dispatch(_action):Observable<true | {error:string}> { return of({error: 'Not Implemented'})}
}

@Component({
  selector: "any-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  providers: [
    FakeDispatcher,
    {
      provide: ANY_DISPATCHER,
      useExisting: FakeDispatcher,
    },
  ],
})
export class CardComponent implements OnInit {
  @Input() content: AnyCardContent = {
    header: {
      title: "Default Title",
    },
    image: "http://placehold.it/300",
    text: "Default text",
    actions: [
      {
        label: "Default Action",
        action: { type: "DEFAULT", payload: null },
      },
    ],
  };
  constructor(
    @Optional() @SkipSelf() @Inject(ANY_DISPATCHER) public dispatcher: CnDispatcher,
    @Self() private fakeDispatcher: FakeDispatcher 
  ) {
    this.dispatcher = dispatcher || fakeDispatcher;
  }

  ngOnInit(): void {}
}
