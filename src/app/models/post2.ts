import { Comment } from "./comment";
import { Usuario } from "./usuario";

export class Post2 {
  id!: number;
  content!: string;
  images!: string[];
  created_at!: Date;
  user!: string;
  comments: Comment[] = [];
  heart: number = 0;
  smile: number = 0;
}
