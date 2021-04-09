import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myParam: string='';
  constructor(private route: ActivatedRoute) {

   
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.myParam = params['displayName']);
  }

}
