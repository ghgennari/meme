import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  private apiUrl = "https://api.imgflip.com/get_memes";

  constructor(private http: HttpClient) { }

  getMemes(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
