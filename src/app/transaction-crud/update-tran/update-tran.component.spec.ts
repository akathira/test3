import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTranComponent } from './update-tran.component';

describe('UpdateTranComponent', () => {
  let component: UpdateTranComponent;
  let fixture: ComponentFixture<UpdateTranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
