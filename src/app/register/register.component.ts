import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  tableau: any[];
  
  user: {
    userName:string,
    email:string,
    password:string,
   }

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.tableau =[]

    this.tableau = JSON.parse(localStorage.getItem('user'));
    this.registerForm = new FormGroup({
      username : new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    

    });
  }

  register(){
    this.service.register(this.tableau, this.registerForm.value);
  }

}
