import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedSharedComponentAComponent } from './scoped-shared-component-a.component';

describe('ScopedSharedComponentAComponent', () => {
  let component: ScopedSharedComponentAComponent;
  let fixture: ComponentFixture<ScopedSharedComponentAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScopedSharedComponentAComponent]
    });
    fixture = TestBed.createComponent(ScopedSharedComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
