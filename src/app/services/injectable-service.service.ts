import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InjectableServiceService {
  constructor() {}
  cars = [
    'Range rover',
    'Mercedes',
    'Tata Punch',
    'BMW',
    'Porsche',
    'Lamborghini',
    'Ferrari',
    'Bugatti',
    'Mclaren',
    'Scorpio',
    'XUV 700',
    'Tata harrier',
    'MG Hector',
    'Kia Seltos',
    'Creta',
    'Seltos',
  ];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}
