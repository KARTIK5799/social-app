import { Component,Input } from '@angular/core';
import { ProfilecardComponent } from "../profilecard/profilecard.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-profile-section',
  standalone: true,
  imports: [ProfilecardComponent,CommonModule],
  templateUrl: './right-profile-section.component.html',
  styleUrl: './right-profile-section.component.css'
})
export class RightProfileSectionComponent {
  @Input() posts: any;
}
