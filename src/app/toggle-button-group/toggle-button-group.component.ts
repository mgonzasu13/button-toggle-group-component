import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button-group',
  templateUrl: './toggle-button-group.component.html',
  styleUrls: ['./toggle-button-group.component.css'],
})
export class ToggleButtonGroupComponent {
  @Input() options: string[] = [];
  @Output() optionSelected = new EventEmitter<string>();

  selectedOption: string = '';

  ngOnInit() {
    // Inicializar selectedOption con la primera opción del arreglo al inicio
    this.selectedOption = this.options.length > 0 ? this.options[0] : '';
    this.optionSelected.emit(this.selectedOption);
  }
  selectOption(option: string) {
    this.selectedOption = option;
    this.optionSelected.emit(option);
  }
}
