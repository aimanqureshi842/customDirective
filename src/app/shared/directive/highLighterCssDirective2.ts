import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[addCss]'
})
export class HighLighterDirective2 implements OnInit{
    constructor(private _eleRef:ElementRef){

    }
ngOnInit():void{
this._eleRef.nativeElement.style.backgroundColor="#E8F5E9";
this._eleRef.nativeElement.style.color="#1B5E20";
this._eleRef.nativeElement.style.borderLeft="5px solid #4CAF50"; 
this._eleRef.nativeElement.style.padding="16px";
this._eleRef.nativeElement.style.marginTop="16px";
this._eleRef.nativeElement.style.borderRadius="6px"
}
}














