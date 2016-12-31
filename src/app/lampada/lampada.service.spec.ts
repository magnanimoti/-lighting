/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LampadaService } from './lampada.service';

describe('LampadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LampadaService]
    });
  });

  it('should ...', inject([LampadaService], (service: LampadaService) => {
    expect(service).toBeTruthy();
  }));
});
