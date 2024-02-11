import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    MatToolbar,
    MatAnchor,
    RouterLinkActive
  ],
  styles: [`
    a.active {
      border-bottom: 2px solid;
    }
  `],
  template: `
    <mat-toolbar color="secondary">
      <nav>
      <a mat-button routerLink="/challenge-1" routerLinkActive="active">Challenge 1</a>
      <a mat-button routerLink="/challenge-2" routerLinkActive="active">Challenge 2</a>
      <a mat-button routerLink="/challenge-3" routerLinkActive="active">Challenge 3</a>
      <a mat-button routerLink="/challenge-4" routerLinkActive="active">Challenge 4</a>
      </nav>
    </mat-toolbar>

    <router-outlet />
  `
})
export class LayoutComponent {

}
