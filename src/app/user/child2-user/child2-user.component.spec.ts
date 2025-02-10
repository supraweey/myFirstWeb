import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2UserComponent } from './child2-user.component';

describe('Child2UserComponent', () => {
  let component: Child2UserComponent;
  let fixture: ComponentFixture<Child2UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child2UserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child2UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
