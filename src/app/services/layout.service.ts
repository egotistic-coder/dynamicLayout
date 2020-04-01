import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem, CompactType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

export interface IComponent {
  TabId: string;
  componentRef: string;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public options: GridsterConfig = {
    draggable: {
      enabled: true
    },
    pushItems: true,
    resizable: {
      enabled: true
    },
    compactType : CompactType.CompactUpAndLeft
  };

  public layout: GridsterItem[] = [];
  public components: IComponent[] = [];

  dropTabId: string;

  constructor() { }

  addItem(): void {
    this.layout.push({
      cols: 5,
      id: UUID.UUID(),
      rows: 5,
      x: 0,
      y: 0
    });
  }

  deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
    const comp = this.components.find(c => c.TabId === id);
    this.components.splice(this.components.indexOf(comp), 1);
    this.options.api.optionsChanged();
  }
  setDropId(tabId: string): void {
    this.dropTabId = tabId;
  }

  dropItem(dragId: string): void {
    const { components } = this;
    const comp: IComponent = components.find(c => c.TabId === this.dropTabId);
    const updateIdx: number = comp ? components.indexOf(comp) : components.length;
    const componentItem: IComponent = {
      TabId: this.dropTabId,
      componentRef: dragId
    };

    this.components = Object.assign([], this.components, { [updateIdx]: componentItem });
  }

  getComponentRef(id: string): string {
    const comp = this.components.find(c => c.TabId === id);
    return comp ? comp.componentRef : null;
  }

  getComponents(): any {
    return this.components;
  }



}
