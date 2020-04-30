import { Component, Input, Output } from '@angular/core';
import { ApiService } from '../../../api.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'storage-modal-bucket-delete',
  templateUrl: './modal-bucket-delete.component.html'
})
export class ModalBucketDeleteComponent {
  @Input() bucket;

  isBucketDeleteModalVisible = true;
  constructor(private API: ApiService) { }

  onDelete() {
    this.API.deleteBucket(this.bucket.id).subscribe((data) => {
      this.isBucketDeleteModalVisible = false;
      location.reload();
    });
  }
}
