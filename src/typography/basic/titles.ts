import { Directive, ElementRef, Renderer2 } from '@angular/core';


function addClass(renderer: Renderer2, el: ElementRef, classToAppend: string): void {
    renderer.addClass(el.nativeElement, classToAppend);
}

@Directive({
    selector: '[libTitle1]'
})
export class Title1Directive {

    constructor(
        private renderer: Renderer2,
        private hostElement: ElementRef
    ) {
        addClass(this.renderer, this.hostElement, 'mat-headline');
    }
}

@Directive({
    selector: '[libTitle2]'
})
export class Title2Directive {

    constructor(
        private renderer: Renderer2,
        private hostElement: ElementRef
    ) {
        addClass(this.renderer, this.hostElement, 'mat-title');
    }
}

@Directive({
    selector: '[libTitle3]'
})
export class Title3Directive {

    constructor(
        private renderer: Renderer2,
        private hostElement: ElementRef
    ) {
        addClass(this.renderer, this.hostElement, 'mat-subheading-2');
    }
}

@Directive({
    selector: '[libTitle4]'
})
export class Title4Directive {

    constructor(
        private renderer: Renderer2,
        private hostElement: ElementRef
    ) {
        addClass(this.renderer, this.hostElement, 'mat-subheading-1');
    }

}

