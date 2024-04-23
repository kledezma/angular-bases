import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz-service.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {


  constructor( private dbzservice : DbzService ){

  }


  public get characters() :  Character[] {
    return [...this.dbzservice.characters] ;
  }


  onDeleteCharacter(id : string): void{
    this.dbzservice.deleteCharacterById(id);
  }


  onNewCharacter(newPj : Character): void{
    this.dbzservice.onNewCharacter(newPj);
  }
}
