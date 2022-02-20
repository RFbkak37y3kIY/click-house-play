import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  post(dbURL: string, postData: any) {
    const { login, password, query } = postData;
    const getStr = `?add_http_cors_header=1&user=${login}&password=${password}&default_format=JSONCompact&max_result_rows=1000&max_result_bytes=10000000&result_overflow_mode=break`
    return this.http.post<any>(`${dbURL}${getStr}`, query);
  }
}
