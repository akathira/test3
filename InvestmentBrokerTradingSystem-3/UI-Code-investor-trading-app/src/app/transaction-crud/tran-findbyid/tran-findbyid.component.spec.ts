import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranFindbyidComponent } from './tran-findbyid.component';

describe('TranFindbyidComponent', () => {
  let component: TranFindbyidComponent;
  let fixture: ComponentFixture<TranFindbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranFindbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranFindbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
