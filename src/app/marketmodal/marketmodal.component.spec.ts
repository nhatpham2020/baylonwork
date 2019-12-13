import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketmodalComponent } from './marketmodal.component';

describe('MarketmodalComponent', () => {
  let component: MarketmodalComponent;
  let fixture: ComponentFixture<MarketmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
