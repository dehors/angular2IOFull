import { Component } from '@angular/core';
@Component({
  selector: 'Error',
  template: `
  <h1>{{title}}</h1>
  `,
  styleUrls: [ '../../app/app.component.css' ]
})
export class ErrorComponent {
  title = 'Component not found... :(';
}