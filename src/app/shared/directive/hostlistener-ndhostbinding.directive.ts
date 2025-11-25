import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlistenerNdhostbinding]'
})
export class HostlistenerNdhostbindingDirective implements OnInit {
// @Input() defaultColor!:string;
  constructor(
    private _eleRef:ElementRef,
    private _renderer:Renderer2
  ) { }
  @HostBinding('style.backgroundColor')
  bgColor:string=''
  @HostBinding('style.color')
  color:string=''
  @HostBinding('style.padding')
  padding:string=''
  @HostBinding('style.borderRadius')
  border_radius:string=''
  @HostBinding('style.boxShadow')
  box_shadow:string=''
ngOnInit(): void {
}
  @HostListener('mouseover')
onMouseOver(){
// this._renderer.setStyle(this._eleRef.nativeElement,"background-color","#1a73e8 ");
this.bgColor="#1a73e8"
// this._renderer.setStyle(this._eleRef.nativeElement,"color","#fff");
this.color="#fff"
// this._renderer.setStyle(this._eleRef.nativeElement,"padding","15px");
this.padding="15px"
// this._renderer.setStyle(this._eleRef.nativeElement,"border-radius","20px ");
this.border_radius="20px"
// this._renderer.setStyle(this._eleRef.nativeElement,"box-shadow","0px 4px 20px rgba(0, 122, 255, 0.35)")
this.box_shadow="0px 4px 20px rgba(0, 122, 255, 0.35)"
}
@HostListener('mouseout')
onMouseOut(){
  // this._renderer.setStyle(this._eleRef.nativeElement,"background-color","#e8f0fe");
  this.bgColor="#e8f0fe"
  // this._renderer.setStyle(this._eleRef.nativeElement,"color","#1a1a1a");
  this.color="#1a1a1a"
  // this._renderer.setStyle(this._eleRef.nativeElement,"padding","10px");
  this.padding="10px"
  // this._renderer.setStyle(this._eleRef.nativeElement,"border-radius","");
  this.border_radius=""
// this._renderer.setStyle(this._eleRef.nativeElement,"box-shadow","")
this.box_shadow=""

}
}
