import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

	produtos:string[] = [];

	menuType:string = 'user';

	constructor(){
		this.produtos = [ 'CPU', 'Processador', 'Teclado', 'Fonte' ];
	}
}
