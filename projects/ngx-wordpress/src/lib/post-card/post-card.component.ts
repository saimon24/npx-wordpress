import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wp-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input('post') post: any;

  @Output()
  details: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  openDetails() {
    this.details.emit(this.post.id);
  }
}
