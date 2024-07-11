import { Component ,Input} from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-postcard',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './postcard.component.html',
  styleUrl: './postcard.component.css'
})
export class PostcardComponent {
  @Input() post: any;
}
