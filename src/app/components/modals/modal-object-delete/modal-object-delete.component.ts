import { Component, OnInit, Input, Output } from '@angular/core';
import { ApiService } from '../../../api.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'storage-modal-object-delete',
  templateUrl: './modal-object-delete.component.html'
})
export class ModalObjectDeleteComponent implements OnInit {
  @Input() objectId;
  @Input() bucketId;
  @Output() deleted = new EventEmitter();
  isObjectDeleteModalVisible = true;
  constructor(private API: ApiService) { }

  ngOnInit(): void {
  }

  deleteObject() {
    console.log(this.objectId);
    this.API.deleteObject(this.bucketId, this.objectId).subscribe(() => {
      this.isObjectDeleteModalVisible = false;
      this.deleted.emit('deleted');
    });
  }
}
