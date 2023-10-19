import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { IBook } from '../../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  public bookArr: any[] = [];
  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
    this.allBook();
  }

  allBook() {
    this._bookService.bookSubObs$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((bookName: string) => {
        this._bookService.getAllBooks(bookName).subscribe((res: IBook[]) => {
          this.bookArr.push(res);
        });
      });
  }

  onBooks(bookName: Event) {
    let val = (bookName.target as HTMLInputElement).value;
    this._bookService.getBookName(val);
  }
}
