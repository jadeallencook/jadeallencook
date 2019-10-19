import { Component, OnInit, Input } from '@angular/core';
import photos from '../../../../assets/photos.json';
import videos from '../../../../assets/videos.json';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post = null;
  type = null;
  comments = null;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    const { type, id } = this.post;
    if (type === 'videos' || type === 'photos') {
      this.type = type;
      this.post = type === 'videos' ? videos[id] : photos[id];
    }
  }

}
