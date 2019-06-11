import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardDirective } from './card.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        CardDirective,
    ],
    exports: [
        CardDirective
    ]
})
export class CardModule { }