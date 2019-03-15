import { Directive, ElementRef, Renderer2 } from '@angular/core';


function addClass(renderer: Renderer2, hostElement: ElementRef, classToAppend: string): void {
    renderer.addClass(hostElement.nativeElement, classToAppend);
}

@Directive({
    selector: '[libText1]'
})
export class Text1Directive {

    constructor(
        private renderer: Renderer2,
        private hostElement: ElementRef
    ) {
        addClass(this.renderer, this.hostElement, 'mat-body-1');
    }
}

@Directive({
    selector: '[libText2]'
})
export class Text2Directive {

    constructor(
        private renderer: Renderer2,
        private hostElement: ElementRef
    ) {
        addClass(this.renderer, this.hostElement, 'mat-body-2');
    }

}

@Directive({
    selector: '[libTextCaption]'
})
export class TextCaptionDirective {

    constructor(
        private renderer: Renderer2,
        private hostElement: ElementRef
    ) {
        addClass(this.renderer, this.hostElement, 'mat-caption');
    }

}

@Directive({
    selector: '[libTextDisplay1]'
})
export class TextDisplay1Directive {


    constructor(
        private renderer: Renderer2,
        private hostElement: ElementRef
    ) {
        addClass(this.renderer, this.hostElement, 'mat-display-1');
    }

}

@Directive({
    selector: '[libTextDisplay2]'
})
export class TextDisplay2Directive {

    constructor(
        private renderer: Renderer2,
        private hostElement: ElementRef
    ) {
        addClass(this.renderer, this.hostElement, 'mat-display-2');
    }

}

@Directive({
    selector: '[libTextDisplay3]'
})
export class TextDisplay3Directive {

    constructor(
        private renderer: Renderer2,
        private hostElement: ElementRef
    ) {
        addClass(this.renderer, this.hostElement, 'mat-display-3');
    }
}

@Directive({
    selector: '[libTextDisplay4]'
})
export class TextDisplay4Directive {

    constructor(
        private renderer: Renderer2,
        private hostElement: ElementRef
    ) {
        addClass(this.renderer, this.hostElement, 'mat-display-4');
    }

}
