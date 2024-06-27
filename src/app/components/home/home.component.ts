import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe],
})
export class HomeComponent {
  title: string = 'angular-v18-app';
  name = 'Mangesh';
  todayDate: string;
  isAdmin: boolean = true;

  constructor(private datePipe: DatePipe) {
    const currentDate = new Date();
    this.todayDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd') || '';
  }
}
