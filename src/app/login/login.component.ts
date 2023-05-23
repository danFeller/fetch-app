import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  async onSubmit() {
    const response = await this.http.post('https://frontend-take-home-service.fetch.com/auth/login', this.loginForm.value).toPromise();
    // Handle the response, save the token, navigate to the dog list page, etc.
  }
}
