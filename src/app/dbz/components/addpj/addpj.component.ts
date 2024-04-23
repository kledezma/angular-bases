import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-addpj',
  templateUrl: './addpj.component.html',
  styleUrl: './addpj.component.css'
})
export class AddpjComponent {

  public Character: Character ={
    id: '',
    name: '',
    power: 0
  }
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter():void{

    if (this.Character.name.length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.Character);

    this.Character = {id: '',name:'', power:0}
  }
}
