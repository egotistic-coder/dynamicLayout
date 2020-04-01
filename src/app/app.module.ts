import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
import { Example3Component } from './components/example3/example3.component';
import { Example4Component } from './components/example4/example4.component';
import { ChildComponent } from './components/example4/child/child.component';
import { SubchildComponent } from './components/example4/child/subchild/subchild.component';
// tslint:disable-next-line: max-line-length
import { embeddedComponents, embeddedComponentsDependencies,
   embeddedModules, embeddedDependencies } from './declarations/layout-components';

@NgModule({
  declarations: [
    AppComponent,
    embeddedDependencies,
    embeddedComponents,
    embeddedComponentsDependencies
  ],
  imports: [
    BrowserModule,
    embeddedModules
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    embeddedComponents
  ]
})
export class AppModule { }
