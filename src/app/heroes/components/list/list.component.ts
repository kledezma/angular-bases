import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public ListHeroes : string[] = ['SpiderMan','IronMan','Hulk','Thor'];
  public deletedHeroe ?: string;

  removeLastHeroe():void{
    this.deletedHeroe = this.ListHeroes.pop();
  }
}
