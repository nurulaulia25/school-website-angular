import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { NgMaterialModule } from 'src/app/shared/ng-material.module';
import { FormatDatePipe } from '@pipes/format-date/format-date.pipe';


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    NgMaterialModule,
    FormatDatePipe
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsComponent {
  @ViewChild('newsSwiper') swiper!: ElementRef<SwiperContainer>;

  listNews = [
    {
      title: "Opening of Coding Club at SMA Dharmawangsa Offers New Opportunities for Students",
      tag: "Student Achievement",
      datePost: new Date('2024-02-12'),
      author: "Nurul Aulia",
      image: 'assets/images/news1.jpg'
    },
    {
      title: "Attention Students of SMA Dharmawangsa! Join the Quiz Competition and Showcase Your Skills!",
      tag: "Student Achievement",
      datePost: new Date('2024-02-12'),
      author: "Nurul Aulia",
      image: 'assets/images/news2.jpg'
    },
    {
      title: "Opening of the New Academic Year 2024-2025",
      tag: "School News",
      datePost: new Date('2024-02-12'),
      author: "Nurul Aulia",
      image: 'assets/images/news3.png'
    },
  ]

  onNext() {
    this.swiper.nativeElement.swiper.slideNext()
  }
  onPrev() {
    this.swiper.nativeElement.swiper.slidePrev()
  }
}