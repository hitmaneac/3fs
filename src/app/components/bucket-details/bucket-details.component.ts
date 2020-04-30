import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
import { HelperService } from '../../helper.service';
import { Objects } from '../../models/objects.model';

@Component({
  selector: 'storage-bucket-details',
  templateUrl: './bucket-details.component.html'
})
export class BucketDetailsComponent implements OnInit {
  @Input() bucket;
  @Output() deleted = new EventEmitter();
  size;
  onBucketDelete = false;
  constructor(private API: ApiService, private helper: HelperService) { }

  getBucketSize() {
    this.API.getObjects(this.bucket.id).subscribe((data: Objects) => {
      let size = 0;
      data.objects.forEach(element => {
        size += element.size;
      });
      this.size = this.helper.bytesToSize(size);
    });
  }

  ngOnInit() {
    this.getBucketSize();
  }
}