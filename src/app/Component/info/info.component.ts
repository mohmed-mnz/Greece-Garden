import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('2000ms ease', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class InfoComponent implements OnInit {

  showAnimation = false;

  constructor(private el: ElementRef) {}

  images = [
    { url: './assets/images/1.webp', category: 'تركيب مظلات' },
    { url: './assets/images/2.webp', category: 'تركيب مظلات' },
    { url: './assets/images/3.webp', category: 'تركيب مظلات' },
    { url: './assets/images/4.webp', category: 'تركيب مظلات' },
    { url: './assets/images/5.webp', category: 'تنسيق حدائق' },
    { url: './assets/images/6.webp', category: 'تنسيق حدائق' },
    { url: './assets/images/7.webp', category: 'تنسيق حدائق' },
    { url: './assets/images/8.webp', category: 'تنسيق حدائق' },
    { url: './assets/images/9.webp', category: 'شلالات' },
    { url: './assets/images/10.webp', category: 'شلالات' },
    { url: './assets/images/11.webp', category: 'شلالات' },
    { url: './assets/images/12.webp', category: 'شلالات' },
    { url: './assets/images/13.jpeg', category: 'تيل صناعي' },
    { url: './assets/images/14.jpeg', category: 'تيل صناعي' },
    { url: './assets/images/15.jpeg', category: 'تيل صناعي' },
    { url: './assets/images/16.jpeg', category: 'تيل صناعي' },
  ];

  selectedCategory = 'الجميع';
  filteredImages = this.images;
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

  ngOnInit() {
    this.checkScroll();

    setInterval(() => {
      if (this.showAnimation) {
        this.paginate((this.currentPage % this.totalPages) + 1);
      }
    }, 5000);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    const element = this.el.nativeElement;
    const componentPosition = element.getBoundingClientRect().top;
    const scrollPosition = window.scrollY !== undefined ? window.scrollY : window.innerHeight;

    if (scrollPosition > componentPosition - window.innerHeight + 300 && !this.showAnimation) {
      this.showAnimation = true;
    }
  }

  hoverImage(event: MouseEvent): void {
    const target = event.target as HTMLImageElement;
    target.style.transform = 'scale(1.1)';
  }

  unhoverImage(event: MouseEvent): void {
    const target = event.target as HTMLImageElement;
    target.style.transform = 'scale(1)';
  }
}
