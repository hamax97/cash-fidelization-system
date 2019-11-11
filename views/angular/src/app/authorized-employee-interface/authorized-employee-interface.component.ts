import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorized-employee-interface',
  templateUrl: './authorized-employee-interface.component.html',
  styleUrls: ['./authorized-employee-interface.component.css']
})
export class AuthorizedEmployeeInterfaceComponent implements OnInit {

  // Array of buttons that the navigation bar will contain in this view.
  private navbarButtons = [];

  private showAnalytics: boolean = false;
  private showHome: boolean = true;

  constructor() {
    var analyticsButton = {router: true, buttonName: "Make analytics", function: "showAnalyticsSection"};
    this.navbarButtons.push(analyticsButton);
  }

  ngOnInit() {
  }

  // Receives an event and calls a function accordingly.
  onButtonPressed($event) {
    switch($event) {
      case "goHome": this.showHomeSection(); break;
      case "showAnalyticsSection": this.showAnalyticsSection(); break;
      default: console.log("Trying to call unrecognized function"); break;
    }
  }

  showHomeSection() {
    // Hide other possible visible sections.
    this.showAnalytics = false;

    // Show home.
    this.showHome = true;
  }

  // Make analytics section visible.
  showAnalyticsSection() {
    // Hide other possible visible sections.
    this.showHome = false;

    this.showAnalytics = true;
  }
}
