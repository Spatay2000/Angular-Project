import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorerslaligaComponent } from './scorerslaliga.component';

describe('ScorerslaligaComponent', () => {
  let component: ScorerslaligaComponent;
  let fixture: ComponentFixture<ScorerslaligaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorerslaligaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorerslaligaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
