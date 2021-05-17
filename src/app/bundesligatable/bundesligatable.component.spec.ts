import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligatableComponent } from './bundesligatable.component';

describe('BundesligatableComponent', () => {
  let component: BundesligatableComponent;
  let fixture: ComponentFixture<BundesligatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundesligatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BundesligatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
