import { Component, Input } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-profilecard',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './profilecard.component.html',
  styleUrl: './profilecard.component.css'
})
export class ProfilecardComponent {
@Input() post:any;
}
