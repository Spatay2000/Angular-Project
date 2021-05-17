import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ligue1tableComponent } from './ligue1table.component';

describe('Ligue1tableComponent', () => {
  let component: Ligue1tableComponent;
  let fixture: ComponentFixture<Ligue1tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ligue1tableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ligue1tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
