import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';

@Component({
  selector: 'mbng7-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        transform: 'translateX("0px")'
      })),
      state('closed', style({
        opacity: 0,
        transform: 'translateX(-150px)'
      })),
      transition('open <=> closed', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class MainNavigationComponent implements OnInit {

  // Gestion de la classe active sur les liens de la navbar
  activePage: string;
  isCollapsed: boolean = false;

  pages = [
    { name: "Liste des items", link: '/item' },
    { name: "Création", link: '/item/edit' }
  ];

  constructor(public activeRouter: ActivatedRoute) {

  }

  changeCollapseState(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    this.activeRouter.url.subscribe((x) => {
      console.log("Url", x);
    });
  }

}
