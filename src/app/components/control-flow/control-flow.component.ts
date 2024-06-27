import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css'],
})
export class ControlFlowComponent {
  isEditable: boolean = false;
  greet = 'Hi...';
  usersData: Array<{ id: number; name: string; email: string }> = [
    { id: 1, name: 'John', email: 'John@gmail.com' },
    { id: 2, name: 'Sam', email: 'Sam@gmail.com' },
    { id: 3, name: 'Danial', email: 'Danial@gmail.com' },
  ];

  enableInput() {
    this.isEditable = !this.isEditable;
  }
  getgreeting() {
    this.greet = 'Hello';
  }
}
