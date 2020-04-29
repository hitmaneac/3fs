import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'storage-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent implements OnInit {
  @Input() bucketId;
  objects;
  onObjectDelete = false;
  constructor(private API: ApiService) { }

  ngOnInit(): void {
    this.API.getObjects(this.bucketId).subscribe((data) => this.objects = data);
  }
}