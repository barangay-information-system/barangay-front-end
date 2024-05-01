import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  // private baseUrl = 'http://backend:3000/api';
  private baseUrl = environment.backendUrl;
  
  constructor(private http: HttpClient) {}

  // post(url: string, body: any) {
  //   delete body.id;
  //   return this.http.post(this.baseUrl + url, body);
  // }
  // patch(url: string, item: any) {
  //   return this.http.patch(this.baseUrl + url, item);
  // }
  // get(url: string) {
  //   return this.http.get(this.baseUrl + url);
  // }
  // delete(url: string) {
  //   return this.http.delete(this.baseUrl + url);
  // }


  post<T>(url: string, body: any) {
    delete body.id;
    return this.http.post<T>(this.baseUrl + url, body);
  }
  patch<T>(url: string, item: any) {
    return this.http.patch<T>(this.baseUrl + url, item);
  }
  get<T>(url: string) {
    return this.http.get<T>(this.baseUrl + url);
  }
  delete<T>(url: string) {
    return this.http.delete<T>(this.baseUrl + url);
  }
}
