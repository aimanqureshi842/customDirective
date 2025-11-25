import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHeadingCss]'
})
export class HeadingCssDirective implements OnInit {

  constructor(private _eleRef:ElementRef) { }
ngOnInit(): void {
  this._eleRef.nativeElement.style.Color="#444";
  this._eleRef.nativeElement.style.fontSize="20px";
  this._eleRef.nativeElement.style.fontWeight="600";
  this._eleRef.nativeElement.style.textAlign="center";
  this._eleRef.nativeElement.style.padding="15px";
  this._eleRef.nativeElement.style.textTransform="uppercase"

}
}
