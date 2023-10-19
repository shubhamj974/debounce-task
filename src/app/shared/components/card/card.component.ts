import { Component, Input, OnInit } from '@angular/core';
import { IBook, VolumeInfo } from '../../models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() bookArrToCard!: VolumeInfo;
  constructor() {}

  ngOnInit(): void {
    console.log(this.bookArrToCard);
  }
}
