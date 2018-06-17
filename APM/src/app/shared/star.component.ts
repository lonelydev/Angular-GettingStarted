import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
/**
 * Nested component used to display the starRating as a pretty set of 5 stars
 */
@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: [ './star.component.css' ]
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  /**
   * Output properties should always be events
   */
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  /**
   * This is used to crop the stars - usesful when you want to
   * display ratings of 3.5 or 4.5 etc.
   */
  starWidth: number;

  /**
   * This is triggered only when an input property changes.
   */
  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
