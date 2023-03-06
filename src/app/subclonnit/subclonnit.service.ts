import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubclonnitModel } from './subclonnit-response';

@Injectable({
  providedIn: 'root'
})
export class SubclonnitService {

  baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  getAllSubclonnits(): Observable<Array<SubclonnitModel>> {
    return this.http.get<Array<SubclonnitModel>>(this.baseUrl + 'api/subclonnit')
  }

  createSubclonnit(subclonnitModel: SubclonnitModel): Observable<SubclonnitModel> {
    return this.http.post<SubclonnitModel>(this.baseUrl + 'api/subclonnit', subclonnitModel);
  }
}