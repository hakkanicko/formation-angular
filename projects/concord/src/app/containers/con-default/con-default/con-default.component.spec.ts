import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConDefaultComponent } from './con-default.component';

describe('ConDefaultComponent', () => {
  let component: ConDefaultComponent;
  let fixture: ComponentFixture<ConDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
