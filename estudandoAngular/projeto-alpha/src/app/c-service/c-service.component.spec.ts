import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CServiceComponent } from './c-service.component';

describe('CServiceComponent', () => {
  let component: CServiceComponent;
  let fixture: ComponentFixture<CServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
