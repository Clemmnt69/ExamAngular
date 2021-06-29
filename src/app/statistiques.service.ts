import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  constructor(public http: HttpClient) { }

  //Fonction qui viens recuprerer les stats via l'URL
  recupererStats(){
      return this.http.get('https://stats.naminilamy.fr');
  }

  //Fonction qui viens supprimer les stats via l'URL
  supprimerStats(){
    return this.http.delete('https://stats.naminilamy.fr');
  }  
}
