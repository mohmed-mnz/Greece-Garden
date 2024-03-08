import { Component } from '@angular/core';

@Component({
  selector: 'app-some-works',
  templateUrl: './some-works.component.html',
  styleUrls: ['./some-works.component.css']
})
export class SomeWorksComponent {
  portfolioImages = [
    { src: './assets/images/ourWork/1.jpg', title: 'تركيب مظلات' },
    { src: './assets/images/ourWork/2.jpg', title: 'تركيب مظلات' },
    { src: './assets/images/ourWork/3.jpg', title: 'تركيب مظلات' },
    { src: './assets/images/ourWork/4.jpg', title: 'تركيب شلالات' },
    { src: './assets/images/ourWork/5.jpg', title: 'تركيب شلالات' },
    { src: './assets/images/ourWork/6.jpg', title: 'تركيب شلالات' },
    { src: './assets/images/ourWork/7.jpg', title: 'تنسيق حدائق' },
    { src: './assets/images/ourWork/8.jpg', title: 'تنسيق حدائق' },
    { src: './assets/images/ourWork/9.jpg', title: 'تنسيق حدائق' },
    { src: './assets/images/ourWork/10.jpg', title: 'تيل صناعي' },
    { src: './assets/images/ourWork/11.jpg', title: 'تيل صناعي' },
    { src: './assets/images/ourWork/12.jpg', title: 'تيل صناعي' },
  ];

  previewImage: any;

  openPreview(image: any) {
    this.previewImage = image;
    const modal = document.getElementById('portfolioModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closePreview() {
    this.previewImage = null; // Clear preview image
    const modal = document.getElementById('portfolioModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
