import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
     this.authService.isAuth.subscribe(isAuth =>
       this.isAuth = isAuth
    )
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
