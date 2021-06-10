import { Component } from '@angular/core';

/**
 * Example component for testing on a switch
 */
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

  /** State switch */
  isOn = false;

  /**
   * Constructor switch
   */
  constructor() {
    if (this.isOn) {
      console.log('Critical case not covered');
    } else {
      console.log('Happy path!!');
    }
  }

  /**
   * Toggle switch status
   */
  changeSwitch() {
    this.isOn = !this.isOn;
  }

  /**
   * Get the message
   */
  get message() {
    return this.isOn ? 'ON' : 'OFF';
  }
}
