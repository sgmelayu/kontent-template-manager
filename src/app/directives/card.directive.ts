import { Directive, ElementRef, Input, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[libCard]',
})
export class CardDirective implements OnInit {

    @Input() enableCard: boolean = true;
    @Input() addPad: boolean = true;

    protected readonly padClass = 'pad';
    protected readonly standardCardClass = 'w-card';


    constructor(
        private hostElement: ElementRef,
        private renderer: Renderer2) {
    }

    ngOnInit(): void {
        this.processCard();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.processCard();
    }

    private processCard(): void {
        if (this.hostElement) {

            if (this.addPad) {
                this.renderer.addClass(this.hostElement.nativeElement, this.padClass);
            } else {
                this.renderer.removeClass(this.hostElement.nativeElement, this.padClass);
            }
            this.renderer.addClass(this.hostElement.nativeElement, this.standardCardClass);
        }
    }
}