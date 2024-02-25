import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTranComponent } from './delete-tran.component';

describe('DeleteTranComponent', () => {
  let component: DeleteTranComponent;
  let fixture: ComponentFixture<DeleteTranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteTranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
