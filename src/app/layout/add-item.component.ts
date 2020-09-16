import {Component, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'add-item-component',
  templateUrl: './add-item.component.html',
  styleUrls: ['../app.component.css']
})
export class AddItemComponent {
  title = "HelloWorld";

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value)
  }
}
