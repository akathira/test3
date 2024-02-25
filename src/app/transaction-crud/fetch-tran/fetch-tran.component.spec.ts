import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchTranComponent } from './fetch-tran.component';

describe('FetchTranComponent', () => {
  let component: FetchTranComponent;
  let fixture: ComponentFixture<FetchTranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchTranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
