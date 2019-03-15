import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    Text1Directive,
    Text2Directive,
    TextCaptionDirective,
    TextDisplay1Directive,
    TextDisplay2Directive,
    TextDisplay3Directive,
    TextDisplay4Directive,
} from './basic/text';
import { Title1Directive, Title2Directive, Title3Directive, Title4Directive } from './basic/titles';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        // Titles
        Title1Directive,
        Title2Directive,
        Title3Directive,
        Title4Directive,
        // Text
        Text1Directive,
        Text2Directive,
        TextCaptionDirective,
        // Display
        TextDisplay1Directive,
        TextDisplay2Directive,
        TextDisplay3Directive,
        TextDisplay4Directive,
    ],
    exports: [
        // Titles
        Title1Directive,
        Title2Directive,
        Title3Directive,
        Title4Directive,
        // Text
        Text1Directive,
        Text2Directive,
        TextCaptionDirective,
        // Display
        TextDisplay1Directive,
        TextDisplay2Directive,
        TextDisplay3Directive,
        TextDisplay4Directive,
    ]
})
export class TypographyModule { }
