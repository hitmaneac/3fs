import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalObjectDeleteComponent } from './modal-object-delete.component';

describe('ModalObjectDeleteComponent', () => {
  let component: ModalObjectDeleteComponent;
  let fixture: ComponentFixture<ModalObjectDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalObjectDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalObjectDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
