import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'storage-bucket-create',
  templateUrl: './bucket-create.component.html',
  styleUrls: ['./bucket-create.component.scss']
})
export class BucketCreateComponent implements OnInit {
  data;
  createIsClosed = true;
  createBucketForm: FormGroup;
  constructor(private API: ApiService, private formBuilder: FormBuilder) {

    this.createBucketForm = this.formBuilder.group({
      name: '',
      location: ''
    });
  }

  ngOnInit(): void {
    this.API.getLocations().subscribe(data => this.data = data);
  }

  onSubmit(data): void {
    this.API.createBucket({ name: data.name, location: data.location }).subscribe(() => location.reload());
  }
}
