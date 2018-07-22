import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaorouselsComponent } from './caorousels.component';

describe('CaorouselsComponent', () => {
  let component: CaorouselsComponent;
  let fixture: ComponentFixture<CaorouselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaorouselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaorouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
