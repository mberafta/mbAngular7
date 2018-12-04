import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mbng7-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  // Gestion de la classe active sur les liens de la navbar
  activePage: string;

  pages = [
    { name: "Liste des items", link: '/item' },
    { name: "Création", link: '/item/edit' }
  ];

  constructor(public activeRouter: ActivatedRoute) {

  }

  ngOnInit() {
    this.activeRouter.url.subscribe((x) => {
      console.log("Url", x);
    });
  }

}
