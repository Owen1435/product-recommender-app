import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {BehaviorSubject, tap} from "rxjs";

import {environment} from "../../../environments/environment";
import {RegisterRequestDto} from "../../model/dto/register.request.dto";
import {RegisterResponseDto} from "../../model/dto/register.response.dto";

@Injectable()
export class AuthService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private http: HttpClient,
  ) {
    this.isAuth.next(!!localStorage.getItem('token'))
  }

  register(dto: RegisterRequestDto): Observable<RegisterResponseDto> {
    const url = environment.apiUrl + '/register/'
    return this.http.post<RegisterResponseDto>(url, dto, this.httpOptions)
      .pipe(
        tap(resp => this.setToken(resp))
      );
  }

  login(dto: RegisterRequestDto): Observable<RegisterResponseDto> {
    const url = environment.apiUrl + '/login/'
    return this.http.post<RegisterResponseDto>(url, dto, this.httpOptions)
      .pipe(
        tap(resp => this.setToken(resp))
      );
  }

  logout(): void {
    localStorage.removeItem('token')
    this.isAuth.next(false)
  }

  private setToken(resp: RegisterResponseDto): void {
    if (resp.success && resp.token) {
      localStorage.setItem('token', resp.token)
      this.isAuth.next(true)
    }
  }
}

