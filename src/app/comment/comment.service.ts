import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommentPayload } from './comment.payload';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    return this.httpClient.get<CommentPayload[]>(this.baseUrl + 'api/comments/by-post/' + postId);
  }

  postComment(commentPayload: CommentPayload): Observable<CommentPayload> {
    return this.httpClient.post<any>(this.baseUrl + 'api/comments', commentPayload);
  }

  getAllCommentsByUser(name: string): Observable<CommentPayload[]> {
    return this.httpClient.get<CommentPayload[]>(this.baseUrl + 'api/comments/by-user/' + name);
  }

  deleteCommentById(id: number): Observable<CommentPayload> {
    return this.httpClient.delete<CommentPayload>(this.baseUrl + 'api/comments/' + id)
  }
}