import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  blogTitle = 'My Fancy Blog';
  baseUrl = 'http://localhost:4200/';
  constructor() { }
}
