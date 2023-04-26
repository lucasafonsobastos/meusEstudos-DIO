import { Component,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements DoCheck, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy{
	quantidade: number = 0;
	constructor(){}

	adicionar() {
		this.quantidade += 1;
	}
	decrementar() {
		this.quantidade -= 1;
	}

	// primeiro ele executa o DoCheck
	ngDoCheck(): void {
		console.log('ngDoCheck');
	}
	// depois ele Init (inicia)
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
	}
	// depois ele Cheked (executa quando ele muda algo);
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
	}
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}

	ngOnDestroy(): void {
		console.log('Aqui jas um componente...');
	}

}
