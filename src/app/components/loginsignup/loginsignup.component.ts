import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loginsignup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css'],
})
export class LoginsignupComponent {
  isLogin: boolean = true;
  loginEmail: string = '';
  loginPassword: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  confirmPassword: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.loginEmail, this.loginPassword).subscribe({
      next: () => {
        this.successMessage = 'Login successful!';
        this.clearMessagesAfterDelay();
        this.router.navigate(['/main']);
      },
      error: (error) => {
        this.errorMessage = 'Login failed: ' + error.message;
        this.clearMessagesAfterDelay();
      },
    });
  }

  onSignup(): void {
    if (this.signupPassword === this.confirmPassword) {
      this.authService.register(this.signupEmail, this.signupPassword, this.signupEmail).subscribe({
        next: () => {
          this.successMessage = 'Registration successful!';
          this.clearMessagesAfterDelay();
          this.router.navigate(['/main']);
        },
        error: (error) => {
          this.errorMessage = 'Signup failed: ' + error.message;
          this.clearMessagesAfterDelay();
        },
      });
    } else {
      this.errorMessage = 'Passwords do not match';
      this.clearMessagesAfterDelay();
    }
  }

  private clearMessagesAfterDelay(): void {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 5000);
  }
}
