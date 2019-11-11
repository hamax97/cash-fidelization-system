import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-interface',
  templateUrl: './client-interface.component.html',
  styleUrls: ['./client-interface.component.css']
})
export class ClientInterfaceComponent implements OnInit {

  // Array of buttons that the navigation bar will contain in this view.
  private navbarButtons = [];

  private showPoints: boolean = false;
  private showSettings: boolean = false;
  private showHome: boolean = true;

  constructor() {
    var pointsButton = {router: true, buttonName: "Points", function: "showPointsSection"};
    this.navbarButtons.push(pointsButton);

    var configButton = {router: true, buttonName: "Settings", function: "showSettingsSection"};
    this.navbarButtons.push(configButton);
  }

  ngOnInit() {
  }

  // Receives an event and calls a function accordingly.
  onButtonPressed($event) {
    switch($event) {
      case "goHome": this.showHomeSection(); break;
      case "showPointsSection": this.showPointsSection(); break;
      case "showSettingsSection": this.showSettingsSection(); break;
      default: console.log("Trying to call unrecognized function"); break;
    }
  }

  showHomeSection() {
    // Hide other possible visible sections.
    this.showSettings = false;
    this.showPoints = false;

    // Show home.
    this.showHome = true;
  }

  showPointsSection() {
    // Hide other possible visible sections.
    this.showSettings = false;
    this.showHome = false;

    // Show points sections.
    this.showPoints = true;
  }

  showSettingsSection() {
    // Hide other possible visible sections.
    this.showPoints = false;
    this.showHome = false;

    // Show points sections.
    this.showSettings = true;
  }

}
