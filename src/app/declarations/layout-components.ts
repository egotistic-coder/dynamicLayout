import { Example4Component } from '../components/example4/example4.component';
import { Example3Component } from '../components/example3/example3.component';
import { Example2Component } from '../components/example2/example2.component';
import { Example1Component } from '../components/example1/example1.component';
import { SubchildComponent } from '../components/example4/child/subchild/subchild.component';
import { ChildComponent } from '../components/example4/child/child.component';
import { GridsterModule } from 'angular-gridster2';
import { LayoutComponent } from '../components/layout/layout.component';
import { LayoutItemDirective } from '../directives/layout-item.directive';

export const components = 
{
    TabContent1: Example1Component,
    TabContent2: Example2Component,
    TabContent3: Example3Component,
    TabContent4: Example4Component
};

export const embeddedComponents: any [] = 
[
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component
];

export const embeddedComponentsDependencies: any [] = 
[
    ChildComponent,
    SubchildComponent,
];

export const embeddedModules: any [] = 
[
    GridsterModule
];

export const embeddedDependencies: any [] = 
[
    LayoutComponent,
    LayoutItemDirective,
];
