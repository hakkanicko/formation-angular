import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTextComponent } from './comp-text.component';

describe('CompTextComponent', () => {
  let component: CompTextComponent;
  let fixture: ComponentFixture<CompTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
