import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{
	@Input() nome:string = "Lucas";

	constructor() {

	}
	ngOnChanges(changes: SimpleChanges): void {
		//throw new Error('Method not implemented.');
	}
	ngOnInit(): void {
		console.log("Eu sou o Nascimento do componente Title");
		//throw new Error('Method not implemented.');
		this.nome = `Ola ${this.nome}`
	}
}
