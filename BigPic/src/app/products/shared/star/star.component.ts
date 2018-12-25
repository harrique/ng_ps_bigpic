import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  totalWidth = 75;

  ngOnInit() {
  }

  ngOnChanges() {
    this.starWidth = this.rating * this.totalWidth / 5;
  }

  onClick() {
    this.ratingClicked.emit(`Rating ${this.rating} clicked`);
  }

}
