import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

interface AgeFormModel {
  name: string;
  age: number | null;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formData: AgeFormModel = {
    name: '',
    age: null,
  };

  submittedTemplateDriven = false;
  bgColorTemplateDriven: string = '';

  form: FormGroup;
  submittedReactive = false;
  bgColorReactive: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmitTemplateDriven(form: NgForm) {
    this.submittedTemplateDriven = true;
    if (form.valid) {
      const age = this.formData.age;
      if (age !== null) {
        if (age < 17) {
          this.router.navigate(['/yellow']);
        } else {
          this.router.navigate(['/pink']);
        }
      }
    }
  }

  onSubmitReactive() {
    if (this.form.valid) {
      const age = this.form.value.age;
      if (age !== null) {
        if (age < 17) {
          this.router.navigate(['/yellow']);
        } else {
          this.router.navigate(['/pink']);
        }
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.formData = { name: '', age: null };
    this.submittedTemplateDriven = false;
  }
}
