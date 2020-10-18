import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBadgesComponent } from './angular-badges.component';

describe('AngularBadgesComponent', () => {
  let component: AngularBadgesComponent;
  let fixture: ComponentFixture<AngularBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
