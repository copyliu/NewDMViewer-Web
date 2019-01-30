import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMsg]',
})
export class MsgDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
