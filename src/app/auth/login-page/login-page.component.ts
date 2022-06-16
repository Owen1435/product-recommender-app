import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {RegisterRequestDto} from "../../model/dto/register.request.dto";
import {Router} from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public form : FormGroup = new FormGroup({});
  public hidePass = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = new FormGroup({
      "username": new FormControl('', [Validators.required]),
      "password": new FormControl('', [Validators.required]),
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
    });
  }

  ngOnInit(): void {
  }

  register() {
    const dto: RegisterRequestDto = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
    }
    this.authService.register(dto).subscribe(resp => {
      resp.success ? this.router.navigate(['/']) : this.openSnackBar(resp.message || 'error')
      this.form.reset()
    })
  }

  login() {
    const dto: RegisterRequestDto = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
    }
    this.authService.login(dto).subscribe(resp => {
      resp.success ? this.router.navigate(['/']) : this.openSnackBar(resp.message || 'error')
      this.form.reset()
    })
  }
}
