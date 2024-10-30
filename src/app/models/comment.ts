import { Usuario } from "./usuario";

export class Comment {
  id!: number;
  content!: string;
  created_at!: Date;
  user!: Usuario;
}
