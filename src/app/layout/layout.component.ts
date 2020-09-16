import {Component} from "@angular/core";

@Component({
  selector: 'layout-component',
  template:
    '<add-item-component (newItemEvent)="addItem($event)">' +
    '</add-item-component><item-component [items]="items"></item-component>'
})

export class LayoutComponent {

  items = ['First item', 'Second item', 'Third item'];

  addItem(item: string) {
    this.items.push(item)
  }
}
