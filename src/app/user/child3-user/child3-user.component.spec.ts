import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3UserComponent } from './child3-user.component';

describe('Child3UserComponent', () => {
  let component: Child3UserComponent;
  let fixture: ComponentFixture<Child3UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child3UserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child3UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
