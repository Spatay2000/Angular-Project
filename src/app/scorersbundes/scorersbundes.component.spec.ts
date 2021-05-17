import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorersbundesComponent } from './scorersbundes.component';

describe('ScorersbundesComponent', () => {
  let component: ScorersbundesComponent;
  let fixture: ComponentFixture<ScorersbundesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorersbundesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorersbundesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
