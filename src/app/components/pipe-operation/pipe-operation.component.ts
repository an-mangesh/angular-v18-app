import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pipe-operation',
  templateUrl: './pipe-operation.component.html',
  styleUrls: ['./pipe-operation.component.css'],
})
export class PipeOperationComponent {
  message: string = 'We aRe impleMenting PipeOpeRatioNS';
  price: number = 12345.6789;
  currentDate: Date = new Date();
  birthday = new Date(2023, 3, 2);
  object: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };
  number1: number = 102365.3256;
  number2: number = 0.79;
  array: any[] = ['apple', 'banana', 'orange', 'grape', 'mango'];

  observable$: Observable<number> = of(42);
  promise$: Promise<string> = Promise.resolve('Hello World!');

  fruits: string[] = [
    'apple',
    'banana',
    'carrot',
    'orange',
    'grape',
    'gawa',
    'mango',
    'strawberry',
    'pineapple',
    'waterMellon',
  ];
}
