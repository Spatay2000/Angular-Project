import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriatableComponent } from './seriatable.component';

describe('SeriatableComponent', () => {
  let component: SeriatableComponent;
  let fixture: ComponentFixture<SeriatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
