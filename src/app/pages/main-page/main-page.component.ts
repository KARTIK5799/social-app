import { Component ,OnInit} from '@angular/core';
import { LogoComponent } from "../../components/logo/logo.component";
import { LeftMenuComponent } from '../../components/left-menu/left-menu.component';
import { BecomesellerComponent } from "../../components/becomeseller/becomeseller.component";
import { SearchbarComponent } from "../../components/searchbar/searchbar.component";
import { PostcardComponent } from "../../components/postcard/postcard.component";
import { RightProfileSectionComponent } from "../../components/right-profile-section/right-profile-section.component";
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [LogoComponent, LogoComponent,CommonModule, LeftMenuComponent, BecomesellerComponent, SearchbarComponent, PostcardComponent, RightProfileSectionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
posts:any[]=[];


constructor(private postService:PostService){}

ngOnInit():void{
  this.postService.getPosts().subscribe((data)=>{
    this.posts=data;
  })
}
}
