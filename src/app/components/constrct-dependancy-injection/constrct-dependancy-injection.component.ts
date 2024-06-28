import { Component } from '@angular/core';
import { InjectableServiceService } from 'src/app/services/injectable-service.service';

@Component({
  selector: 'app-constrct-dependancy-injection',
  templateUrl: './constrct-dependancy-injection.component.html',
  styleUrls: ['./constrct-dependancy-injection.component.css'],
})
export class ConstrctDependancyInjectionComponent {
  constructCars: string[] = [];
  constructor(private injectService: InjectableServiceService) {
    this.constructCars = this.injectService.getCars();
  }
}
