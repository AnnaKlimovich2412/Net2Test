import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  username = new FormControl('klimovichannet@gmail.com', [Validators.required, Validators.email])
  password = new FormControl('AnnaKlimovich123!', [Validators.required, Validators.minLength(6)])

  signInForm = new FormGroup({
    username: this.username,
    password: this.password
  })

  signIn(): void {
    this.signInForm.disable();
    this.authService
      .login(this.signInForm.value)
      .subscribe({
          next: (res) => {
            if (res.success) {
              this.router.navigateByUrl('/users');
              console.log('succses')
            } else {
              this.signInForm.enable();
              //TODO this.showAlert = true;
            }
          }
        }
      )
  }
}
