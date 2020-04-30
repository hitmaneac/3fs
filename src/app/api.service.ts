import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {

  }

  authorizationHeader = {
    headers: new HttpHeaders().set('Authorization', 'Token 9662ED14-6CCC-403A-8C55-75D09608DD84')
  };
  url = 'https://challenge.3fs.si/storage';

  getLocations() { // ok
    return this.http.get(`${this.url}/locations`, this.authorizationHeader);
  }
  getBuckets() { // ok
    return this.http.get(`${this.url}/buckets`, this.authorizationHeader);
  }
  createBucket(params) { // ok
    return this.http.post(`${this.url}/buckets`, params, this.authorizationHeader);
  }
  getBucket(bucketId) {
    return this.http.get(`${this.url}/buckets/${bucketId}`, this.authorizationHeader);
  }
  deleteBucket(bucketId) { // ok
    return this.http.delete(`${this.url}/buckets/${bucketId}`, this.authorizationHeader);
  }
  getObjects(bucketId) { // ok
    return this.http.get(`${this.url}/buckets/${bucketId}/objects`, this.authorizationHeader);
  }
  deleteObject(bucketId, objectId) {
    return this.http.delete(`${this.url}/buckets/${bucketId}/objects/${objectId}`, this.authorizationHeader);
  }
  createObject(bucketId, data) {
    return this.http.post(`${this.url}/buckets/${bucketId}/objects`, data, this.authorizationHeader);
  }
}