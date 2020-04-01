import { Directive, Input, OnChanges, ViewContainerRef, ComponentFactoryResolver, ComponentRef, OnInit } from '@angular/core';
import { components } from '../declarations/layout-components';

@Directive({
  selector: '[appLayoutItem]'
})
export class LayoutItemDirective implements OnChanges, OnInit {

  @Input() componentRef: string;

  component: ComponentRef<any>;

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver  ) { }

  ngOnInit(): void {}

  ngOnChanges(): void {

    const component = components[this.componentRef];
    if (component) {
      const factory = this.resolver.resolveComponentFactory<any>(component);
      this.component = this.container.createComponent(factory);
    }
  }
}
