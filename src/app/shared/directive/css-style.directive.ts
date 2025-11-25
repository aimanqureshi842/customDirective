import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCssStyle]'
})
export class CssStyleDirective implements OnInit {

  constructor(private _eleRef:ElementRef,
    private _renderer :Renderer2
  ) { }
ngOnInit(): void {
  this._renderer.setStyle(this._eleRef.nativeElement,"backgroundColor" ,"#FFF8E1");
  this._renderer.setStyle(this._eleRef.nativeElement,"color","#8A6D3B");
  this._renderer.setStyle(this._eleRef.nativeElement,"borderLeft","5px solid #FFB300");
  this._renderer.setStyle(this._eleRef.nativeElement,"padding","15px");
  this._renderer.setStyle(this._eleRef.nativeElement,"marginTop","15px")
  this._renderer.setStyle(this._eleRef.nativeElement,"borderRadius","6px");
  
}

}
