import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

const token = localStorage.getItem('token')
const headers = new HttpHeaders()
.set('Authorization', `Bearer ${token}`)
.set('Content-Type', 'application/json')
.set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {headers});
  }

  fetchLatest(): Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:8080/api/posts/latest", {headers})
  }

  createPost(PostData: any) {
    return this.http.post(this.apiUrl, PostData, {headers});
    }
}
