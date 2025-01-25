import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPatientInfo } from '../interfaces/consulting.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ConsultingService {
  private http = inject(HttpClient);

  public getPatientInfo(): Observable<IPatientInfo> {
    const url = 'assets/data/user.json';
    return this.http.get<IPatientInfo>(url);
  }
}
