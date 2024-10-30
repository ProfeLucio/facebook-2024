import { Comment } from "./comment";
import { Usuario } from "./usuario";

export class Post {
  id!: number;
  content!: string;
  images!: string[];
  created_at!: Date;
  user!: Usuario;
  comments: Comment[] = [];
  heart: number = 0;
  smile: number = 0;
}
