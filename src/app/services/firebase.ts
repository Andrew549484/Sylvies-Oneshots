import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp;
  public auth: Auth;
  public firestore: Firestore;

  constructor() {
    // Initialize the core Firebase App
    this.app = initializeApp(environment.firebaseConfig);
    
    // Initialize individual services
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
  }
}
