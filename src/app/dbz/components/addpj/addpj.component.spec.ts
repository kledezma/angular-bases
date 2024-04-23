import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpjComponent } from './addpj.component';

describe('AddpjComponent', () => {
  let component: AddpjComponent;
  let fixture: ComponentFixture<AddpjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddpjComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
