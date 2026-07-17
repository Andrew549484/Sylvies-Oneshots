import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import {  
  collection, 
  doc, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  onSnapshot 
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp;
  public auth: Auth;
  public firestore: Firestore;
  public collection: any[] = [];
  
  constructor() {
    // Initialize the core Firebase App
    
    this.app = initializeApp({
    apiKey: "AIzaSyAQP4YQlABL3nI0w1eC94SZSjLJf1gcldc",
    authDomain: "sylvies-oneshots.firebaseapp.com",
    projectId: "sylvies-oneshots",
    storageBucket: "sylvies-oneshots.firebasestorage.app",
    messagingSenderId: "273176202961",
    appId: "1:273176202961:web:868b31b88db297ac513ff0",
    measurementId: "G-QZFJRCHT0V"
  },"slyvies-oneshots");
    
    // Initialize individual services
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    const colRef = collection(this.firestore, "Testing");
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
        this.collection.push(doc.data());
      });
    }).catch((error) => {
      console.error("Error fetching documents: ", error);
    });
  }
}
