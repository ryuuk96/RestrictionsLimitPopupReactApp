import { Component, OnInit } from '@angular/core';
import { NavigationMenu } from 'src/app/models/navigation-menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  header: NavigationMenu[] = [
    new NavigationMenu("LandingPage.Pricing", "/pricing"),
    new NavigationMenu("LandingPage.AboutUs", "/about-us"),
    new NavigationMenu("LandingPage.Faq", "/faq"),
    new NavigationMenu("LandingPage.Terms&Conditions", "/terms-conditions"),
    new NavigationMenu("LandingPage.PrivacyPolicy", "/privacy-policy"),
    new NavigationMenu("LandingPage.Login", "/login", null, null, false),
    new NavigationMenu("LandingPage.Register", "/register", null, null, false),
  ];

  ngOnInit(): void {
  }

}
