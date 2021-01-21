import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private global: GlobalService, translate: TranslateService) {
    translate.setDefaultLang("english");
    translate.use("english");
  }
  
  title = 'AdminApp';
  
  @HostListener('window:resize', ['$event'])
  setWindowInnerWidth(e) {
    this.global.setApplicationInnerWidth(e.target.innerWidth);
  }
  ngOnInit(): void {
    this.global.setApplicationInnerWidth(window.innerWidth);
  }
}
