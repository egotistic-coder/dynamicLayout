import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService, IComponent } from '../../services/layout.service';
import { detectChanges } from '@angular/core/src/render3';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {

  get options(): GridsterConfig {
    return this.layoutService.options;
  }

  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }

  get components(): IComponent[] {
    return this.layoutService.components;
  }

  constructor(
    private layoutService: LayoutService, private detector: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  CurrentLayout(): void {
    alert(JSON.stringify(this.layoutService.getComponents()));
  }

  CurrentContainerLayout(): void {
    alert(JSON.stringify(this.layoutService.layout));
  }

  AddEmptyContainer(): void  {
      this.layoutService.addItem();
  }

  GetContainerElement(id: string): any {
    return this.layoutService.getComponentRef(id);
  }

  DroppableItems(id: string): void {
    this.layoutService.dropItem(id);
  }

  SetContainerId(id: string): void  {
    this.layoutService.setDropId(id);
  }

  RemoveContainer(id: string): void {
    this.layoutService.deleteItem(id);
  }

 }
