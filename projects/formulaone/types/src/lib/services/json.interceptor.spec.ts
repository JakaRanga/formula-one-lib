import { TestBed } from '@angular/core/testing';

import { JsonInterceptor } from './json.interceptor';

describe('JsonInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JsonInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JsonInterceptorInterceptor = TestBed.inject(JsonInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
