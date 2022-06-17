import { TestBed } from '@angular/core/testing';

import { ArithmaticService } from './arithmatic.service';

describe('ArithmaticService', () => {
  let service: ArithmaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithmaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
