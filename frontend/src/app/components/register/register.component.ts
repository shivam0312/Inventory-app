import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {
  input;

  constructor(private authService:AuthService, public router:Router,) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: '',
      email: '',
      is_manager: false
    }
  }
  onSubmit() {
    this.authService.registerUser(this.input).subscribe(
      response => {
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.router.navigate(['register']);
      }
    )
  }

}
