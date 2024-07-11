import { inject, Injectable } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from '@angular/fire/auth';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseAuth = inject(Auth);

  getCurrentUser(): Observable<User | null> {
    return new Observable<User | null>(observer => {
      const unsubscribe = this.firebaseAuth.onAuthStateChanged(user => {
        observer.next(user);
        observer.complete();
      });
     
      return () => unsubscribe();
    }).pipe(
      catchError(error => {
        console.error('Error fetching current user:', error);
        return throwError(() => new Error(error.message)); 
      })
    );
  }

  register(email: string, password: string, displayName: string): Observable<void> {
    return from(createUserWithEmailAndPassword(this.firebaseAuth, email, password)).pipe(
      switchMap(response => 
        from(updateProfile(response.user, { displayName })) 
      ),
      map(() => undefined),
      catchError(error => {
        console.error('Registration error:', error);
        return throwError(() => new Error(error.message)); 
      })
    );
  }

  login(email: string, password: string): Observable<void> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password)).pipe(
      map(() => undefined),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => new Error(error.message)); 
      })
    );
  }

  logout(): Observable<void> {
    return from(signOut(this.firebaseAuth)).pipe(
      map(() => undefined),
      catchError(error => {
        console.error('Logout error:', error);
        return throwError(() => new Error(error.message)); 
      })
    );
  }
}
