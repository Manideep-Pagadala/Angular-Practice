import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamodfierComponent } from './datamodfier.component';

describe('DatamodfierComponent', () => {
  let component: DatamodfierComponent;
  let fixture: ComponentFixture<DatamodfierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatamodfierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatamodfierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
