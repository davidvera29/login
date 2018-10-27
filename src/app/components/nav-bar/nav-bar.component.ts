import { IdentityService } from './../../services/identity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private s: IdentityService) { }
  estatus = false;
  ngOnInit() {
  this.estatus = this.s.isAuthenticated();

  }

}
