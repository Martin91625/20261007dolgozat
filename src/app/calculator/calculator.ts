/*
* File: calculator.ts
* Author: El Miri Martin
* Copyright: 2026, El Miri Martin
* Group: Szoft II/N
* Date: 2026-10-12
* Github: https://github.com/Martin91625/
* Licenc: MIT
*/


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculator',
  styleUrl: './calculator.css',
  templateUrl: './calculator.html',
})
export class Calculator {
  e: number | null = null; 
  f: number | null = null; 
  area: number | null = null;

  calculate(): void {
    if (this.e === null || this.f === null || this.e <= 0 || this.f <= 0) {
      this.area = null;
      return;
    }
    this.area = (this.e * this.f) / 2;
  }
}
