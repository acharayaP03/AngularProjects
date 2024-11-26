import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
