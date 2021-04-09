import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
// import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

    constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit(): void {
    
    

  }

  onSubmit(name: any) {
    // this.submitted=true;
    // if (this.loginForm.invalid) {
    //   return;
    // };
    console.log(name.value);
    let displayName=name.value;
    this.router.navigate(['/login',displayName]);
    // this.loginService.login(this.loginForm.value.name,this.loginForm.value.userName, this.loginForm.value.password).subscribe(
    //   data => {
    //     this.router.navigate(['/login']);
    //   }

    // )};
}
}
