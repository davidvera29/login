import { Iuser } from './../../models/user.model';
import { IdentityService } from './../../services/identity.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usr: string;
  psw: string;
  isValidated = false;
  user_returned: Iuser;
  // isConfirmed = false;
  isErrorUser = false;

  constructor(private identityService: IdentityService, private router: Router) { }

  ngOnInit() {
  }

  validar() {
    this.isValidated = true;
    this.identityService.autenticate(this.usr, this.psw).subscribe(ans => this.user_returned = ans);
    console.log(this.user_returned);
    if (this.user_returned) {this.router.navigate(['/Account']); } else {this.isErrorUser = true; }
    // if (this.user_returned === undefined) {
    //   this.isConfirmed = true;
    // } else {
    //   this.isConfirmed = false;
    // }
  }

  isValid(v: string): boolean {
    return !this.isValidated || this.isValidated && v ? true : false;
  }
}
