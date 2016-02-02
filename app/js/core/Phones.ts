import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
export interface Phone {
  name: string;
  snippet: string;
  images: string[];
}
@Injectable()
export class Phones {
  constructor(private http: Http) { }
  query():Observable<Phone[]> {
    return this.http.get(`phones/phones.json`)
      .map((res:Response) => res.json());
  }
  get(id: string):Observable<Phone> {
    return this.http.get(`phones/${id}.json`)
      .map((res:Response) => res.json());
  }
}