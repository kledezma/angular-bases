import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters : Character[] = [
    {
    id: uuid(),
    name: 'krilin',
    power: 2000
  },
    {
      id: uuid(),
    name: 'goku',
    power: 10000
  },
    {
      id: uuid(),
    name: 'vegeta',
    power: 9000
  },
  ];

  onNewCharacter(character:Character):void{
    // const newPJ : Character ={
    //   id : uuid(),
    //   name: character.name,
    //   power: character.power
    // };

    const newPJ :Character = { ...character, id:uuid()}

    this.characters.push(newPJ);
  }

  deleteCharacterById(id:string):void{

    if (id === '' || id === undefined) {
      return;
    }

  this.characters = this.characters.filter(character => character.id !== id)
  }

}
