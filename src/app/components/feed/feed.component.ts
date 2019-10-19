import { Component, OnInit } from '@angular/core';
import feed from '../../../assets/feed.json';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts = feed.slice(0, 10);
  index = 1;
  max = feed.length;

  constructor() {
  }
  
  load() {
    this.index++;
    this.posts = feed.slice(0, 10 * this.index);
  }

  ngOnInit(): void {
  }

}
