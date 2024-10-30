import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { Post2 } from '../../models/post2';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  public posts: Post[] = [];
  public publicar: Post2 = new Post2;
  constructor(
    private postServ: PostService,
    private userServ: UserService,
  ) {}
  async ngOnInit() {
    try {
      await this.postServ.getPosts().subscribe((res: any) => {
        res.forEach(async (ele: Post) => {
          await this.userServ.getUserId(ele.user.toString()).subscribe((res2: any) => {
            ele.user = res2;
            this.posts.push(ele);
          });
        });
        // reordenar el array de manera inversa
        this.posts.reverse();


      });
    } catch (error) {
      console.log("Error Gestionado: ", error);
    }

  }
  async onSave(){
    this.publicar.user = "1";
    const imagen = "https://picsum.photos/id/"+Math.round(Math.random()*150)+"/200/300"
    this.publicar.images = [imagen];
    this.postServ.createPost(this.publicar).subscribe( async(res: any) => {
      await this.userServ.getUserId(res.user.toString()).subscribe((res2: any) => {
        res.user = res2;
        this.posts.reverse();
        this.posts.push(res);
        this.posts.reverse();
        this.publicar = new Post2;
      });
    });
  }
  onEmotions(post: Post){
    let aux = new Post2;
    aux.id = post.id;
    aux.content = post.content;
    aux.images = post.images;
    aux.created_at = post.created_at;
    aux.user = post.user.id.toString();
    aux.comments = post.comments;
    aux.heart = post.heart;
    aux.smile = post.smile;


    this.postServ.updatePost(aux).subscribe((res: any) => {
      console.log("Actualizado", res);
    }
    );
  }
}
