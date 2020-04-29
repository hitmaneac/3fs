import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'storage-bucket-details',
  templateUrl: './bucket-details.component.html',
  styleUrls: ['./bucket-details.component.scss']
})
export class BucketDetailsComponent implements OnInit {
  @Input() bucket;

  onBucketDelete = false;
  constructor() { }

  ngOnInit(): void {
    console.log('details bucket: ', this.bucket);
  }

}
