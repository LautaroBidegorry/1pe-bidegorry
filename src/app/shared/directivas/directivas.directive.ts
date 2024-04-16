import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivasDirective {

  constructor(private ElementRef:ElementRef) { 
    console.log(this.ElementRef);
    this.ElementRef.nativeElement.style.fontsize = '20px';
    
    
  }

}