import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList : Character [] = [
  {
    id: '0',
    name: "trunks",
    power: 10
  }

]
@Output()
public onDeleteId: EventEmitter<string> = new EventEmitter();

onDeleteCharacter(index:string):void{
  this.onDeleteId.emit(index);
};
}
