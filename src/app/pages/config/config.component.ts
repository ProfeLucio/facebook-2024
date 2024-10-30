import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [],
  templateUrl: './config.component.html',
  styleUrl: './config.component.sass'
})
export class ConfigComponent implements OnInit {
  public id: string = '';
  public user: Usuario = new Usuario();
  constructor(
    private actived: ActivatedRoute,
    private userServ: UserService
  ) { }

  ngOnInit(): void {
    this.actived.params.subscribe((res: any) => {
      this.id = res.id;
      this.userServ.getUserId(this.id).subscribe((res: any) => {
        this.user = res;
        console.log(this.user);
      });
    });
  }
}
