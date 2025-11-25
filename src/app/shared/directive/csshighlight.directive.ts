import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCsshighlight]'
})
export class CsshighlightDirective implements OnInit {

  constructor(private _eleRef:ElementRef,
    private _renderer:Renderer2
  ) { }
ngOnInit(): void {
  this._renderer.setStyle(this._eleRef.nativeElement,"backgroundColor","#FFF3CD");
  this._renderer.setStyle(this._eleRef.nativeElement,"color","#856404");
  this._renderer.setStyle(this._eleRef.nativeElement,"borderLeft","5px solid #FFC107");
  this._renderer.setStyle(this._eleRef.nativeElement,"padding","15px");
  this._renderer.setStyle(this._eleRef.nativeElement,"borderRadius","6px");
  
}
}
