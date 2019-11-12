import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FranchiseInterfaceService } from './franchise-interface.service';

@Component({
  selector: 'app-franchise-interface',
  templateUrl: './franchise-interface.component.html',
  styleUrls: ['./franchise-interface.component.css']
})
export class FranchiseInterfaceComponent implements OnInit {

  // Array of buttons that the navigation bar will contain in this view.
  private navbarButtons = [];

  // Used to control when to show/not show some section.
  private showPointsEquivalence: boolean = false;
  private showHome: boolean = true;

  // Points-Money equivalence stuff.
  private franchiseID;
  private backendService: FranchiseInterfaceService = new FranchiseInterfaceService();
  private currentEquivalence = null;
  private franchiseCurrency: string;
  private modalCloseResult;

  constructor(
    private modalService: NgbModal
  ) {
    // Obtain franchise ID from the URL.
    this.franchiseID = "123asd123";

    // Make buttons appear in navigation bar.
    var pointsButton = {router: true, buttonName: "Stablish points equivalence", function: "showPointsEquivalenceSection"};
    this.navbarButtons.push(pointsButton);

    // Obtain current points/money equivalence.
    this.currentEquivalence = this.backendService.obtainCurrentEquivalence(this.franchiseID);
    this.franchiseCurrency = this.backendService.obtainFranchiseCurrency(this.franchiseID);
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

  onUpdateEquivalence(newEquivalence, modalAlertContent, modalErrorContent) {

    var newEquivalenceValue = Number(newEquivalence);
    // Send update to backend.
    if (newEquivalenceValue != 0 && !Number.isNaN(newEquivalenceValue)) {
      this.showAlert(modalAlertContent, 'modal-are-you-sure');
    } else {
      this.showAlert(modalErrorContent, 'modal-invalid-equivalence');
    }
  }

  sendUpdatedValue(newEquivalenceValue, modalObject) {
    this.backendService.updateCurrentEquivalence(newEquivalenceValue);
    modalObject.close('Ok click');
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

  showAlert(content, modalID) {
    this.modalService.open(content, {ariaLabelledBy: modalID}).result.then((result) => {
      this.modalCloseResult = `Closed with: ${result}`;
    }, (reason) => {
      this.modalCloseResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}