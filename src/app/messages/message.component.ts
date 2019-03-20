import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ComponentDependencies } from 'src/di';

import { BaseComponent } from '../core/base.component';

@Component({
  selector: 'lib-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './message.component.html',
})
export class MessageComponent extends BaseComponent {

  @Input() text?: string;
  @Input() type: 'error' | 'success' = 'error';

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }
}
