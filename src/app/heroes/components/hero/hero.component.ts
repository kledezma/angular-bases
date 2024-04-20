import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = "Iron Man";
  public age: number = 45;


  public ChangeName (NewName: string) {
    this.name = NewName;
  }

  public ChangeAge (NewAge: string) {
    this.name = NewAge;
  }

  public ResetForm () {
    this.name = "Iron Man";
    this.age = 45;
  }

  get CapitalizeName ():string {
    return this.name.toUpperCase();
  }

  HeroeDescription ():string{
    return `${this.name} - ${this.age}`;
  }
}
