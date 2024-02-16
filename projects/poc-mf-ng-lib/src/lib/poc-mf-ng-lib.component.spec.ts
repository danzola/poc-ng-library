import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocMfNgLibComponent } from './poc-mf-ng-lib.component';

describe('PocMfNgLibComponent', () => {
  let component: PocMfNgLibComponent;
  let fixture: ComponentFixture<PocMfNgLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PocMfNgLibComponent]
    });
    fixture = TestBed.createComponent(PocMfNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
