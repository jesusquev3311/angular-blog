import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerItemDetailComponent } from './manager-item-detail.component';

describe('ManagerItemDetailComponent', () => {
  let component: ManagerItemDetailComponent;
  let fixture: ComponentFixture<ManagerItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
