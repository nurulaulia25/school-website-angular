import { Component } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
  gotoDiv(page: string) {
    
  }
}
