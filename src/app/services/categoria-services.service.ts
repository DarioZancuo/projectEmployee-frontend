import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServices {

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get(CONSTANTS.API_URL + 'categoria/listall');
  }

  listById(id: number) {
    let params = new HttpParams().set('id', id.toString());
    return this.http.get(CONSTANTS.API_URL + 'categoria/listbyid', { params });
  }

  create(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'categoria/create', body);
  }

  update(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'categoria/update', body);
  }

  delete(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'categoria/delete', body);
  }

}
