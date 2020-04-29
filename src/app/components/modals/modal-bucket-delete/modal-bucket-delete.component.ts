import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'storage-modal-bucket-delete',
  templateUrl: './modal-bucket-delete.component.html',
  styleUrls: ['./modal-bucket-delete.component.scss']
})
export class ModalBucketDeleteComponent implements OnInit {
  @Input() bucket;
  isBucketDeleteModalVisible = true;
  constructor(private API: ApiService) { }

  ngOnInit(): void {
    console.log('delete bucket: ', this.bucket);
  }

  onDelete() {
    this.API.deleteBucket(this.bucket.id).subscribe((data) => {
      console.log('Done', data);
      this.isBucketDeleteModalVisible = false;
    });
  }
}
