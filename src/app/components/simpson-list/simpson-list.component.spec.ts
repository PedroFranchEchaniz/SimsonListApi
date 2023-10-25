import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonListComponent } from './simpson-list.component';

describe('SimpsonListComponent', () => {
  let component: SimpsonListComponent;
  let fixture: ComponentFixture<SimpsonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonListComponent]
    });
    fixture = TestBed.createComponent(SimpsonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
