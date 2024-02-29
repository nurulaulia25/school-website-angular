import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'my-website-with-angular';
}
