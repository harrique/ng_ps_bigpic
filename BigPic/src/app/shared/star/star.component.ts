import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;
  starWidth: number;
  totalWidth: number;

  constructor() { 
    this.totalWidth = 75;    
   }

  ngOnInit() {    
  }

  ngOnChanges() {
    this.starWidth = this.rating * this.totalWidth / 5;
  }

}
