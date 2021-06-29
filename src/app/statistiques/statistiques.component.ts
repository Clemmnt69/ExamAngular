import { Component, OnInit } from '@angular/core';
import { StatistiqueModel } from '../models/statistiques';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  lstStatistique: StatistiqueModel[] = [
    { id: 1, titre: 'Démographie en France', valeur: '60M', appreciation: 'SUCCES' },
    { id: 2, titre: 'Démographie au Portugal', valeur: '9M', appreciation: 'SUCCES' },
    { id: 3, titre: 'Démographie au Brésil', valeur: '180M', appreciation: 'SUCCES' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
