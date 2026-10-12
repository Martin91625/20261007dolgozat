/*
* File: app.ts
* Author: El Miri Martin
* Copyright: 2026, El Miri Martin
* Group: Szoft II/N
* Date: 2026-10-12
* Github: https://github.com/Martin91625/
* Licenc: MIT
*/


import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('rombatlo');
}
