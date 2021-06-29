import { Component, OnInit } from '@angular/core';
import { StatistiqueModel } from '../models/statistiques';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  

}
