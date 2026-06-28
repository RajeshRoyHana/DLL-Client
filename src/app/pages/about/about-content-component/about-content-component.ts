import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about-content-component',
  imports: [],
  templateUrl: './about-content-component.html',
})
export class AboutContentComponent implements AfterViewInit, OnDestroy {
  activeSection = signal('about');
  private scrollHandler: (() => void) | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const sectionIds = ['about', 'who-we-are', 'what-we-do', 'how-we-work', 'founder'];
    const offset = 140;

    const onScroll = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      this.activeSection.set(current);
    };

    this.scrollHandler = onScroll;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  ngOnDestroy(): void {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }
}
