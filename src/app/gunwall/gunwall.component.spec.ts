import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunwallComponent } from './gunwall.component';

describe('GunwallComponent', () => {
  let component: GunwallComponent;
  let fixture: ComponentFixture<GunwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
