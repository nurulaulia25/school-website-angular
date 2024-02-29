import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

//import { NgFor } from '@angular/common';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    MatButtonModule,
    //NgFor
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent {
  listImages = [
    'assets/images/gambar2.jpg',
    'assets/images/gambar4.jpg',
    'assets/images/gambar5.jpg',
    'assets/images/gambar6.jpg',
    'assets/images/gambar7.jpg'
  ]
}
