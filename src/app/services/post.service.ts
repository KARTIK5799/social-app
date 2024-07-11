import { Injectable } from '@angular/core';
import { POST_DATA } from '../api/postdata';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts():Observable<any[]>{
    return of(POST_DATA);
  }
}
