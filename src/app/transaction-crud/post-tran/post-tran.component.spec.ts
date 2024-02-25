import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTranComponent } from './post-tran.component';

describe('PostTranComponent', () => {
  let component: PostTranComponent;
  let fixture: ComponentFixture<PostTranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostTranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
