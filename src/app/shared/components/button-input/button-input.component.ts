import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-input',
  templateUrl: './button-input.component.html',
  styleUrls: ['./button-input.component.scss']
})
export class ButtonInputComponent implements OnInit {
  @Input() text: string;
  buttonHide = false;
  constructor() { }

  ngOnInit() {}
  showInput() {
    this.buttonHide = true;
  }
}
