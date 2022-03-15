import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatalogNComponent } from './katalog-n.component';

describe('KatalogNComponent', () => {
  let component: KatalogNComponent;
  let fixture: ComponentFixture<KatalogNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatalogNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatalogNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
