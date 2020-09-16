import {Component, Input} from '@angular/core'

@Component({
  selector: 'item-component',
  templateUrl: './item.component.html',
  styleUrls: ['../app.component.css']
})
export class ItemComponent {
  title = "HelloWorld";

  @Input() items: string[];

}
