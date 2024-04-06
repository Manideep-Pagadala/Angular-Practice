import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbDataComponent } from './db-data.component';

describe('DbDataComponent', () => {
  let component: DbDataComponent;
  let fixture: ComponentFixture<DbDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
