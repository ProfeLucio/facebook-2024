import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { Post } from '../../models/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommentComponent, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.sass'
})
export class PostComponent {
  @Input() data!: Post;
  @Output() event = new EventEmitter();
  onEmotion(emotion: string) {
    if(emotion === 'heart') {
      if(this.data.heart)
        this.data.heart++;
      else
        this.data.heart = 1;
    } else {
      if(this.data.smile)
        this.data.smile++;
      else
        this.data.smile = 1;
    }
    this.event.emit(this.data);
  }
}
