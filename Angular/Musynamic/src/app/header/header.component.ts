import { Component, OnInit, Input } from '@angular/core';
import { Header } from '../header';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  head : Header = new Header("Connexion","Inscription","Boutique");

 
constructor(private router: Router) { 
   
  
  
  }

  ngOnInit() {
    this.head
  }
  
  IsAccueil() {
    return this.router.url === "/accueil";
  }

}