import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CInputFilhoComponent } from './c-input-filho.component';

describe('CInputFilhoComponent', () => {
  let component: CInputFilhoComponent;
  let fixture: ComponentFixture<CInputFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CInputFilhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CInputFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
