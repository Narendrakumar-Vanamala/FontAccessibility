import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  private fontSizeSubject = new BehaviorSubject<string>('medium'); // Default is medium
  fontSize$ = this.fontSizeSubject.asObservable();

  constructor() { }

  setFontSize(size: string) {
    this.fontSizeSubject.next(size);
    document.body.className = size;
  }
}
