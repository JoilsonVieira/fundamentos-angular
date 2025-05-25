import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      idade: [0, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submeterFormulario() {
      console.log(this.formulario);
    // if (this.formulario.valid) {
    //   console.log(this.formulario.value);
    // } else {
    //   this.formulario.markAllAsTouched();
    // }
  }
}
