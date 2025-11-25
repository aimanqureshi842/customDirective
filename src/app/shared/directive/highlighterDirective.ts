import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[paraSelect]'
})
export class HighlighterDirecrtive implements OnInit{
    constructor(private _eleRef:ElementRef){

    }
ngOnInit():void{
  this._eleRef.nativeElement.style.backgroundColor="#fff3cd";
  this._eleRef.nativeElement.style.color="";
  this._eleRef.nativeElement.style.padding="15px";
  this._eleRef.nativeElement.style.marginTop="15px";
  this._eleRef.nativeElement.style.borderRadius="6px";
  this._eleRef.nativeElement.style.borderLeft="5px solid #ffca2c"
}
}
















