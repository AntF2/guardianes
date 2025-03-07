import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("login") === "true";
    }
    return false;
  }
}
