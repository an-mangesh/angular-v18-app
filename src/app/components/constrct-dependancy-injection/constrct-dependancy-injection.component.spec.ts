import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrctDependancyInjectionComponent } from './constrct-dependancy-injection.component';

describe('ConstrctDependancyInjectionComponent', () => {
  let component: ConstrctDependancyInjectionComponent;
  let fixture: ComponentFixture<ConstrctDependancyInjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstrctDependancyInjectionComponent]
    });
    fixture = TestBed.createComponent(ConstrctDependancyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
