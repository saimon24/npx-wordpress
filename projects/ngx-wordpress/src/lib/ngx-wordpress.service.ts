import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LibConfigService, LibConfig } from './ngx-wordpress.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxWordpressService {
  baseUrl = this.config.apiUrl;

  constructor(@Inject(LibConfigService) private config: LibConfig, private http: HttpClient) {
    console.log('My config: ', config);
  }

  getPostList(options = {}): Observable<any[]> {
    let params = new HttpParams();
    let keys = Object.keys(options);
    
    for (let key of keys) {
      params = params.append(key, options[key]);
    }

    const requestOptions = {
      params: params
    };
    
    return this.http.get<any[]>(`${this.baseUrl}/posts`, requestOptions).pipe(
      map(posts => {
        for (let post of posts) {
          post.media_url = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
        }
        return posts;
      })
    );
  }

  getPost(postId: number) {
    return this.http.get(`${this.baseUrl}/posts/${postId}`);
  }
}
