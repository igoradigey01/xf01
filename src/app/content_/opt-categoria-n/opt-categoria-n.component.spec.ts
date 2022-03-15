import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptCategoriaNComponent } from './opt-categoria-n.component';

describe('OptCategoriaNComponent', () => {
  let component: OptCategoriaNComponent;
  let fixture: ComponentFixture<OptCategoriaNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptCategoriaNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptCategoriaNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
