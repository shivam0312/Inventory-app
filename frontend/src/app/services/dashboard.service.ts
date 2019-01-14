import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseurl = "http://127.0.0.1:8000/api";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get(this.baseurl + '/products/',
    {headers: this.httpHeaders});
  }
  getOneProduct(id): Observable<any>{
    return this.http.get(this.baseurl + '/products/' + id + '/',
    {headers: this.httpHeaders});
  }
  putProduct(product): Observable<any> {
    const body= {name: product.name, vendor: product.vendor,mrp: product.mrp,batch_num: product.batch_num, quantity: product.quantity,batch_date: product.batch_date};
    return this.http.put(this.baseurl + '/products/' + product.id + '/', body,
    {headers: this.httpHeaders});
  }
  addProduct(product): Observable<any> {
    const body= {name: product.name, vendor: product.vendor,mrp: product.mrp,batch_num: product.batch_num, quantity: product.quantity,batch_date: product.batch_date};
    return this.http.post(this.baseurl + '/products/', body,
    {headers: this.httpHeaders});
  }
  removeProduct(id): Observable<any>{
    return this.http.delete(this.baseurl + '/products/' + id + '/',
    {headers: this.httpHeaders});
  }
}
