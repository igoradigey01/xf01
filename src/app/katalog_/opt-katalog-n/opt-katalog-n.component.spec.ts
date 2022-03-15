import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptKatalogNComponent } from './opt-katalog-n.component';

describe('OptKatalogNComponent', () => {
  let component: OptKatalogNComponent;
  let fixture: ComponentFixture<OptKatalogNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptKatalogNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptKatalogNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
