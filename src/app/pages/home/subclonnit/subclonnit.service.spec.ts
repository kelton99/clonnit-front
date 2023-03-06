import { TestBed } from '@angular/core/testing';

import { SubclonnitService } from './subclonnit.service';

describe('SubclonnitService', () => {
  let service: SubclonnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubclonnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
