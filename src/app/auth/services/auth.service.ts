import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {environment} from "../../../environments/environment";
import {RegisterRequestDto} from "../../model/dto/register.request.dto";
import {RegisterResponseDto} from "../../model/dto/register.response.dto";
import {BehaviorSubject, tap} from "rxjs";

@Injectable()
export class AuthService {
  public loginApiUrl = environment.apiUrl + '/login/';
  public registerApiUrl = environment.apiUrl + '/register/';
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
    return this.http.post<RegisterResponseDto>(this.registerApiUrl, dto, this.httpOptions)
      .pipe(
        tap(resp => this.setToken(resp)),
        catchError(this.handleError<RegisterResponseDto>('register error'))
      );
  }

  login(dto: RegisterRequestDto): Observable<RegisterResponseDto> {
    return this.http.post<RegisterResponseDto>(this.loginApiUrl, dto, this.httpOptions)
      .pipe(
        tap(resp => this.setToken(resp)),
        catchError(this.handleError<RegisterResponseDto>('login error'))
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }
}

