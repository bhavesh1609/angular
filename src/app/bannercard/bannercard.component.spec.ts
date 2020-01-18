import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannercardComponent } from './bannercard.component';

describe('BannercardComponent', () => {
  let component: BannercardComponent;
  let fixture: ComponentFixture<BannercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
