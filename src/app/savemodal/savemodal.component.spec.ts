import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavemodalComponent } from './savemodal.component';

describe('SavemodalComponent', () => {
  let component: SavemodalComponent;
  let fixture: ComponentFixture<SavemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
