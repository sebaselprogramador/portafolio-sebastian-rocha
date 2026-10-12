import { Component, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from './portfolio.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  private readonly http = inject(HttpClient);
  readonly data = signal<Portfolio | null>(null);
  readonly loading = signal(true);
  readonly error = signal(false);
  readonly menuOpen = signal(false);
  readonly category = signal('Todos');
  readonly brokenImages = signal<string[]>([]);
  readonly year = new Date().getFullYear();
  readonly categories = computed(() => ['Todos', ...new Set(this.data()?.projects.map(p => p.category) ?? [])]);
  readonly projects = computed(() => this.data()?.projects.filter(p => this.category() === 'Todos' || p.category === this.category()) ?? []);

  constructor() { this.load(); }

  load(): void {
    this.loading.set(true);
    this.error.set(false);
    this.http.get<Portfolio>('data/portfolio.json').subscribe({
      next: data => {
        if (!data?.profile || !Array.isArray(data.projects) || !Array.isArray(data.skills) || !Array.isArray(data.education) || !Array.isArray(data.socials)) {
          this.error.set(true);
        } else {
          this.data.set(data);
          document.title = `${data.profile.name} | Portafolio`;
        }
        this.loading.set(false);
      },
      error: () => { this.error.set(true); this.loading.set(false); }
    });
  }

  closeMenu(): void { this.menuOpen.set(false); }
  imageFailed(path: string): void { this.brokenImages.update(images => [...images, path]); }
  hasImage(path: string): boolean { return !!path && !this.brokenImages().includes(path); }
  safeUrl(url: string): string | null {
    try { const parsed = new URL(url); return ['https:', 'http:'].includes(parsed.protocol) ? parsed.href : null; }
    catch { return null; }
  }
  emailLink(email: string): string | null {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? `mailto:${encodeURIComponent(email)}?subject=Contacto%20desde%20tu%20portafolio` : null;
  }
}
