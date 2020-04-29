import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBucketDeleteComponent } from './modal-bucket-delete.component';

describe('ModalBucketDeleteComponent', () => {
  let component: ModalBucketDeleteComponent;
  let fixture: ComponentFixture<ModalBucketDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBucketDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBucketDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
