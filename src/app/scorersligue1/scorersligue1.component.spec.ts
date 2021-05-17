import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scorersligue1Component } from './scorersligue1.component';

describe('Scorersligue1Component', () => {
  let component: Scorersligue1Component;
  let fixture: ComponentFixture<Scorersligue1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scorersligue1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Scorersligue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
