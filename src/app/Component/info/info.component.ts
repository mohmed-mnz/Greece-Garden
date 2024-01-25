import { Component } from '@angular/core';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {



  images = [
    { url: './assets/images/1.webp', category: 'تركيب مظلات' },
        { url: './assets/images/2.webp', category: 'تركيب مظلات' },
    { url: './assets/images/3.webp', category: 'تركيب مظلات' },
    { url: './assets/images/4.webp', category: 'تركيب مظلات' },


    { url: './assets/images/5.webp', category: 'تنسيق حدائق' },
    { url: './assets/images/6.webp', category: 'تنسيق حدائق' },
    { url: './assets/images/7.webp', category: 'تنسيق حدائق' },
    { url: './assets/images/8.webp', category: 'تنسيق حدائق' },


    { url: './assets/images/9.webp', category: ' شلالات' },
    { url: './assets/images/10.webp', category: ' شلالات'},
    { url: './assets/images/11.webp', category: ' شلالات' },
    { url: './assets/images/12.webp', category: ' شلالات' },


    { url: './assets/images/13.jpg', category: ' تشطيبات' },
    { url: './assets/images/14.jpg', category: ' تشطيبات' },
    { url: './assets/images/15.jpg', category: ' تشطيبات' },
    { url: './assets/images/16.jpg', category: ' تشطيبات' },

  ];



  selectedCategory = 'الجميع';
  filteredImages = this.images; // Initially, show all images
  currentPage = 1;
  itemsPerPage = 4;

  get totalItems(): number {
    return this.filteredImages.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  paginate(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  filterImagesByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'الجميع') {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter(image => image.category === category);
    }
  }

  getCategories(): string[] {
    const categoriesSet = new Set<string>();
    this.images.forEach(image => categoriesSet.add(image.category));
    return ['الجميع', ...Array.from(categoriesSet)];
  }
}