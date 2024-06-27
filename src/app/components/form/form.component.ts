import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true,
})
export class FormComponent {
  favouriteFramework: string = 'Angular';
  showFramework() {
    this.favouriteFramework = this.favouriteFramework;

    if (this.favouriteFramework) alert(this.favouriteFramework);
    else alert('Please add a favourite framework.');
  }

  addFramework() {
    if (this.favouriteFramework) {
      this.favouriteFramework = this.favouriteFramework;
      alert('Added a favourite framework as ' + this.favouriteFramework);
    } else {
      alert('Please enter a framework to add.');
    }
  }

  resetFramework() {
    this.favouriteFramework = confirm(
      'Are you sure you want to reset your favourite framework -' +
        this.favouriteFramework
    )
      ? ''
      : this.favouriteFramework;
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
