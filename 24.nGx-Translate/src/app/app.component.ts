import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule,CommonModule,RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  languages = ['az', 'en'];
  
  private translate = inject(TranslateService);
  
  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'az';
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }

  changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
  
}