import { NgFor } from '@angular/common';
import { Component, NgModule, inject } from '@angular/core';
import { InjectableServiceService } from 'src/app/services/injectable-service.service';
@Component({
  selector: 'app-injectable-service',
  templateUrl: './injectable-service.component.html',
  styleUrls: ['./injectable-service.component.css'],
  providers: [InjectableServiceService, NgModule],
  imports: [NgFor],
  standalone: true,
})
export class InjectableServiceComponent {
  injectableServiceService = inject(InjectableServiceService);
  currentCar: string = '';
  getCurrentCar(id: number) {
    this.currentCar = this.injectableServiceService.getCar(id);
  }
}
