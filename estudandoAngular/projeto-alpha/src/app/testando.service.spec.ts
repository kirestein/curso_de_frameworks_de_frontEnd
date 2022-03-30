import { TestBed } from '@angular/core/testing';

import { TestandoService } from './testando.service';

describe('TestandoService', () => {
  let service: TestandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
