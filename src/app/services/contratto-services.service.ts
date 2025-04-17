import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ContrattoServices {

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get(CONSTANTS.API_URL + 'contratto/listall');
  }

  listById(id: number) {
    let params = new HttpParams().set('id', id.toString());
    return this.http.get(CONSTANTS.API_URL + 'contratto/listbyid', { params });
  }

  create(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'contratto/create', body);
  }

  update(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'contratto/update', body);
  }

  delete(body: any) {
    return this.http.post(CONSTANTS.API_URL + 'contratto/delete', body);
  }

}
