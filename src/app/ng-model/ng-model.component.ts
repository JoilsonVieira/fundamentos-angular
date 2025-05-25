import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss'],
})
export class NgModelComponent {
  formulario = {
    nome: '',
    idade: 0,
    email: '',
  };

  submeterFormulario(formulario: any) {
    console.log(formulario);
    console.log(formulario.form.value);
  }
}
