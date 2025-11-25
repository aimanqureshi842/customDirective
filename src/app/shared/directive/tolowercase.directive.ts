import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTolowercase]'
})
export class TolowercaseDirective implements OnInit {
  eve: any;

  constructor(private _eleRef:ElementRef,
    private _renderer:Renderer2
  ) { }
ngOnInit(): void {
  
}
// @HostListener('keyup')
// onKeyUp(){
//   console.log(this._renderer.selectRootElement(this._eleRef.nativeElement).value)
//   let val=this._renderer.selectRootElement(this._eleRef.nativeElement).value;
//   this._renderer.selectRootElement(this._eleRef.nativeElement).value=val.toLowerCase()
// }

@HostListener('keyup',['$event'])
onKeyUp(eve:Event){
  let val= (eve.target as HTMLInputElement).value;
  (eve.target as HTMLInputElement).value=val.toLowerCase()
  console.log((eve.target as HTMLInputElement).value);
}
}
