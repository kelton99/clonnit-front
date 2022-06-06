import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubclonnitModel } from './subclonnit-response';

@Injectable({
  providedIn: 'root'
})
export class SubclonnitService {

  constructor(private readonly http: HttpClient) { }

  getAllSubclonnits(): Observable<Array<SubclonnitModel>> {
    return this.http.get<Array<SubclonnitModel>>('http://localhost:8080/api/subclonnit/')
  }

  createSubclonnit(subclonnitModel: SubclonnitModel): Observable<SubclonnitModel> {
    return this.http.post<SubclonnitModel>('http://localhost:8080/api/subclonnit/', subclonnitModel);
  }
}