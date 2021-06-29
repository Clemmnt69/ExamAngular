import { StatistiqueModel } from './models/statistiques';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularExam';

  statistiqueUne : StatistiqueModel = { 
    id: 1, 
    titre: 'Démographie en France', 
    valeur: '60M', 
    appreciation: 'SUCCESS' 
  }

  statistiqueDeux : StatistiqueModel = { 
    id: 2, 
    titre: 'Démographie au Portugal', 
    valeur: '9M', 
    appreciation: 'SUCCESS' 
  }
}
