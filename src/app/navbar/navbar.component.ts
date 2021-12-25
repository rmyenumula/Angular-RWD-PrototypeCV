import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  ngOnInit(): void {
  }
  
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    }
	
	changeLanguage(){
		
	   if(document.getElementById('languageChanged').checked) 	
	   {
		    this.translate.use('nl');
       }else{
		    this.translate.use('en');
	   }
	
   }

}
