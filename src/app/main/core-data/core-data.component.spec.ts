import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDatComponent } from './core-data.component';

describe('CoreDatComponent', () => {
  let component: CoreDatComponent;
  let fixture: ComponentFixture<CoreDatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreDatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
