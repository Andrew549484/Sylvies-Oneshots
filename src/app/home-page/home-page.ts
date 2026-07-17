import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase';
@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  constructor(private firebaseService: FirebaseService) {

  }
}
