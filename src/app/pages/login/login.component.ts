import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public onClickLoginButton(): void {
    const username: string = this.loginForm.get('username')!.value;
    const password: string = this.loginForm.get('password')!.value;
    this.authService.login(username, password);
  }

  private initForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('somniac', Validators.compose([Validators.required, Validators.nullValidator])),
      password: new FormControl('@WkDqmP2XHx8VJL', Validators.compose([Validators.required, Validators.nullValidator]))
    });
  }

}
