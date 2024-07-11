import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loginsignup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loginsignup.component.html',
  styleUrl: './loginsignup.component.css'
})
export class LoginsignupComponent {
  isLogin:boolean=false;

}
