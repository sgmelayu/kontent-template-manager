import { ChangeDetectorRef, Component } from '@angular/core';

import { ComponentDependencies } from '../di';
import { BaseComponent } from './core/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends BaseComponent {

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }
}
