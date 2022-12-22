import { TestBed } from '@angular/core/testing';

import { AuthenicationProviderService } from './authenication-provider.service';

describe('AuthenicationProviderService', () => {
  let service: AuthenicationProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenicationProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
