import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input;

  constructor(private authService:AuthService, public router:Router,) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: '',
    }
  }

  onSubmit() {
    this.authService.loginUser(this.input).subscribe(
      response => {
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.router.navigate(['login']);
      }
    )
  }

}
