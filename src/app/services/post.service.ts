import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostId(id: string) {
    return this.http.get('http://localhost:3000/posts/'+id);
  }
  getPosts() {
    return this.http.get('http://localhost:3000/posts');
  }
  createPost(post: any) {
    return this.http.post('http://localhost:3000/posts', post);
  }
  updatePost(post: any) {
    return this.http.put('http://localhost:3000/posts/'+post.id, post);
  }

}
