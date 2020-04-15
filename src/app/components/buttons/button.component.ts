import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { ComponentDependencies } from '../../../di';
import { BaseComponent } from '../../core/base.component';

export type ButtonColor = 'primary' | 'accent' | 'disabled';

@Component({
  selector: 'lib-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
})
export class ButtonComponent extends BaseComponent {

  @Input() matIcon?: string;
  @Input() disabled: boolean = false;
  @Input() color: ButtonColor = 'primary';

  public get colorClass(): ButtonColor {
    if (this.disabled) {
      return 'disabled';
    }
    return this.color;
  }

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }
}
