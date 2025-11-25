import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core"






@Directive({
    selector:'[cssSelect]'
})
export class CssDirective implements OnInit{
    constructor(private _eleRef:ElementRef,
        private _renderer:Renderer2
    ){

    }
    ngOnInit(): void {
        this._renderer.setStyle(this._eleRef.nativeElement, "backgroundColor","#E3F2FD");
        this._renderer.setStyle(this._eleRef.nativeElement,"color","#0D47A1");
        this._renderer.setStyle(this._eleRef.nativeElement,"borderLeft","5px solid #2196F3");
        this._renderer.setStyle(this._eleRef.nativeElement,"borderRadius","6px");
        this._renderer.setStyle(this._eleRef.nativeElement,"padding","15px");
        this._renderer.setStyle(this._eleRef.nativeElement,"marginTop","15px")
    }
}

    
