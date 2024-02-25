import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyidComponent } from './findbyid.component';

describe('FindbyidComponent', () => {
  let component: FindbyidComponent;
  let fixture: ComponentFixture<FindbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
