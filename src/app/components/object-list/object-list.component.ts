import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormBuilder } from '@angular/forms';
import { HelperService } from '../../helper.service';
@Component({
  selector: 'storage-object-list',
  templateUrl: './object-list.component.html'
})
export class ObjectListComponent implements OnInit {
  @Input() bucketId;
  uploadForm;
  objects;
  selectedObject = null;
  onObjectDelete = false;
  fileSave = false;
  constructor(private API: ApiService, private formBuilder: FormBuilder, public helper: HelperService) {
  }

  ngOnInit(): void {
    this.API.getObjects(this.bucketId).subscribe((data) => this.objects = data);

    this.uploadForm = this.formBuilder.group({
      file: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
      this.fileSave = true;
      this.submit();
    }
  }

  selectObject(object) {
    object.active = true;
    this.selectedObject = object;
  }

  submit() {
    let formData = new FormData();
    formData.append('file', this.uploadForm.get('file').value);
    this.API.createObject(this.bucketId, formData).subscribe(
      res => {
        this.ngOnInit();
      },
      err => console.error(err)
    );
  }

  onDeleted(event) {
    if (event) this.ngOnInit();
  }

  openFileBrowser(event) {
    event.preventDefault();
    let element: HTMLElement = document.getElementById('fileWindow') as HTMLElement;
    element.click();
  }
}