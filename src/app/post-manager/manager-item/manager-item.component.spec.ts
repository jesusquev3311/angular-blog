import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerItemComponent } from './manager-item.component';

describe('ManagerItemComponent', () => {
  let component: ManagerItemComponent;
  let fixture: ComponentFixture<ManagerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
