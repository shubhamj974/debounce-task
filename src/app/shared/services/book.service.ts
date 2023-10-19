import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBook } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  public bookUrl = environment.baseUrl;
  private _bookSub$: Subject<string> = new Subject<string>();
  public bookSubObs$: Observable<string> = this._bookSub$.asObservable();
  constructor(private _http: HttpClient) {}

  getAllBooks(name: string): Observable<IBook[]> {
    const params = new HttpParams().set('q', name);
    return this._http
      .get<Array<IBook>>(this.bookUrl, { params: params })
      .pipe();
  }

  getBookName(book: string) {
    this._bookSub$.next(book);
  }
}
