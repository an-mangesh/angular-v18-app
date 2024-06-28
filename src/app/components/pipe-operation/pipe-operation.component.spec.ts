import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeOperationComponent } from './pipe-operation.component';

describe('PipeOperationComponent', () => {
  let component: PipeOperationComponent;
  let fixture: ComponentFixture<PipeOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeOperationComponent]
    });
    fixture = TestBed.createComponent(PipeOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
