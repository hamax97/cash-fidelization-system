import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-franchise-interface',
  templateUrl: './franchise-interface.component.html',
  styleUrls: ['./franchise-interface.component.css']
})
export class FranchiseInterfaceComponent implements OnInit {

  // Array of buttons that the navigation bar will contain in this view.
  private navbarButtons = [];

  private showPointsEquivalence: boolean = false;
  private showHome: boolean = true;

  constructor() {
    var pointsButton = {router: true, buttonName: "Stablish points equivalence", function: "showPointsEquivalenceSection"};
    this.navbarButtons.push(pointsButton);
  }

  ngOnInit() {
  }

  // Receives an event and calls a function accordingly.
  onButtonPressed($event) {
    switch($event) {
      case "goHome": this.showHomeSection(); break;
      case "showPointsEquivalenceSection": this.showPointsEquivalenceSection(); break;
      default: console.log("Trying to call unrecognized function"); break;
    }
  }

  showHomeSection() {
    // Hide other possible visible sections.
    this.showPointsEquivalence = false;

    // Show home.
    this.showHome = true;
  }

  showPointsEquivalenceSection() {
    // Hide possible visible sections.
    this.showHome = false;

    this.showPointsEquivalence = true;
  }
}
