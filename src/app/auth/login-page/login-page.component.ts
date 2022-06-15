import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {RegisterRequestDto} from "../../model/dto/register.request.dto";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hide = true;
  public form : FormGroup = new FormGroup({});

  constructor(
    private authService: AuthService
  ) {
    this.form = new FormGroup({
      "username": new FormControl('', [Validators.required]),
      "password": new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  register() {
    const dto: RegisterRequestDto = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
    }
    this.authService.register(dto).subscribe(resp => console.log(resp))
  }

  login() {
    const dto: RegisterRequestDto = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
    }
    this.authService.login(dto).subscribe(resp => console.log(resp))
  }
}
