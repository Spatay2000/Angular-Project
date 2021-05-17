import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorersaseriaComponent } from './scorersaseria.component';

describe('ScorersaseriaComponent', () => {
  let component: ScorersaseriaComponent;
  let fixture: ComponentFixture<ScorersaseriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorersaseriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorersaseriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
