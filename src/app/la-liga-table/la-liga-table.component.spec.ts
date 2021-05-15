import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaLigaTableComponent } from './la-liga-table.component';

describe('LaLigaTableComponent', () => {
  let component: LaLigaTableComponent;
  let fixture: ComponentFixture<LaLigaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaLigaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaLigaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
