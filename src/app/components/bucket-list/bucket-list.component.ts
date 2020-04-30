import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Buckets } from '../../models/buckets.model';

@Component({
  selector: 'storage-bucket-list',
  templateUrl: './bucket-list.component.html'
})
export class BucketListComponent implements OnInit {
  buckets;
  isBucketListVisible = true;
  selectedBucket;
  menu = 1;
  onBucketDetails = false;
  constructor(private API: ApiService) { }

  ngOnInit(): void {
    this.API.getBuckets().subscribe((data: Buckets) => this.buckets = data);
  }

  onBucket(bucket) {
    this.isBucketListVisible = false;
    this.selectedBucket = bucket;
    this.onBucketDetails = true;
  }

}
