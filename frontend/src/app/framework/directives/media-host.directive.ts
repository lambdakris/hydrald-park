import { Directive, Injector, Input, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[mediaHost]'})
export class MediaHostDirective {
  constructor(    
    public viewContainerRef: ViewContainerRef){}

  // @Input()
  // set mediaHost(componentFactory: any) {
  //   this.viewContainerRef.createComponent(componentFactory);    

  //   // Injector.create({
  //   //     providers: [
  //   //       {
  //   //         provide: '',
  //   //         useValue: 
  //   //       }
  //   //     ]
  //   //   })
  // };  
}
