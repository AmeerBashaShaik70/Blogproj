import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferencesComponent } from './refferences.component';

describe('RefferencesComponent', () => {
  let component: RefferencesComponent;
  let fixture: ComponentFixture<RefferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
