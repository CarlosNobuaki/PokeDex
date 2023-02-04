import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureListComponent } from './capture-list.component';

describe('CaptureListComponent', () => {
  let component: CaptureListComponent;
  let fixture: ComponentFixture<CaptureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
