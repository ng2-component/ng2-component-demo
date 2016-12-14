import { Directive, Renderer, ElementRef } from '@angular/core';


// 属性型指令
@Directive({
    selector: '[ng-directive-demo]'
})
export class PropertyDirective{
    elementRef:ElementRef;
    render: Renderer;

    constructor(elementRef:ElementRef,render: Renderer){
        this.elementRef = elementRef;
        this.render = render;
        this.render.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
    }
}