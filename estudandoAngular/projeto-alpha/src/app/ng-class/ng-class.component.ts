import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  // vamos criar a nossa primeira propriedade para vincular com o ngClass
  cssAlteradoViaVar: string = 'color size'
  objCSS: PropsCss = new PropsCss();
}

//vamos criar uma classe que refenrencia propriedade css
class PropsCss {
  color: boolean = true
  size: boolean = true
}
