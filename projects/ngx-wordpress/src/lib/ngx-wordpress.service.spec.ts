import { TestBed } from '@angular/core/testing';

import { NgxWordpressService } from './ngx-wordpress.service';

describe('NgxWordpressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxWordpressService = TestBed.get(NgxWordpressService);
    expect(service).toBeTruthy();
  });
});
