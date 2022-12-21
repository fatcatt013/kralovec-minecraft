import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class TestService {
  constructor(private http: HttpClient) { }
  
  getConfig() {
    return this.http.get('http://localhost:4200/api/');
  }
}