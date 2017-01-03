import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    <input type='text'>
    <button></button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
