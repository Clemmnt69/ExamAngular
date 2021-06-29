import { StatistiquesService } from '../statistiques.service';
import { Component, OnInit } from '@angular/core';
import { StatistiqueModel } from '../models/statistiques';
import { Input } from '@angular/core';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit{

  //On crée un input qui va prendre en valeur les statistiques
  @Input() statistiqueInput: StatistiqueModel;
  
  constructor(public statistiquesService: StatistiquesService) {}

  //On initialise, on récupère les statistiques
  ngOnInit(): void {
    this.statistiquesService.recupererStats().subscribe(
        (datas) => {
            console.log(datas);
            this.statistiqueInput = datas as StatistiqueModel;
        }
    );
  }
}
