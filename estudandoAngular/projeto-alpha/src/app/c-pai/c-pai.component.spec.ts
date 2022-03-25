import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPaiComponent } from './c-pai.component';

describe('CPaiComponent', () => {
  let component: CPaiComponent;
  let fixture: ComponentFixture<CPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
