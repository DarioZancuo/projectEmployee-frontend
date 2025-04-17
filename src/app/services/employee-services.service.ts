import { Injectable } from '@angular/core';
import { CONSTANTS } from '../shared/constants';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServices {

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get(CONSTANTS.API_URL + 'employee/listall');
  }

  listById(id: number) {
    let params = new HttpParams().set('id', id.toString());
    return this.http.get(CONSTANTS.API_URL + 'employee/listbyid', { params });
  }

  create(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'employee/create', body);
  }

  update(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'employee/update', body);
  }

  delete(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'employee/delete', body);
  }

}
