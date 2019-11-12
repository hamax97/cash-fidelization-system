import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-interface',
  templateUrl: './skeleton-interface.component.html',
  styleUrls: ['./skeleton-interface.component.css']
})
export class SkeletonInterfaceComponent implements OnInit {

  // Controls the toggle nav bar button. Used only in responsive mode.
  private navbarOpen: boolean = false;

  // Sends an event indicating which button was pressed.
  @Output() buttonPressed = new EventEmitter<string>();

  // Buttons to be showed in the navigation bar.
  //private navbarButtons = [];
  @Input() navbarButtons;

  constructor() {
    // var button1 = {router: true, buttonName: "example", function: "function1"};
    // var button2 = {
    //   dropdown: true, 
    //   buttonName: 'example2',
    //   buttonsProperties: [{name: "Drop1", function: "func1"}, {name: "Drop2", function: "func2"}, {name: "Drop3", function: "func3"}]
    // };
  }

  ngOnInit() {
  }

  // Hide unhide navbar in responsive nav bar mode.
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onButtonPressed(buttonIdentifier: string) {
    this.buttonPressed.emit(buttonIdentifier);
  }
}
