import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class RuoloServices {

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get(CONSTANTS.API_URL + 'ruolo/listall');
  }

  listById(id: number) {
    let params = new HttpParams().set('id', id.toString());
    return this.http.get(CONSTANTS.API_URL + 'ruolo/listbyid', { params });
  }

  create(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'ruolo/create', body);
  }

  update(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'ruolo/update', body);
  }

  delete(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'ruolo/delete', body);
  }

}
