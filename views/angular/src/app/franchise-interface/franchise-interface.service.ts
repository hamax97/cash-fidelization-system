import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FranchiseInterfaceService {

  constructor() { }

  obtainCurrentEquivalence(franchiseID) {
    // Make request to backend here.
    // ...
    return 1500.0;
  }

  obtainFranchiseCurrency(franchiseID) {
    // Make request to backend here.
    // ...
    return "COP";
  }

  updateCurrentEquivalence(newEquivalence) {
    // Send update to backend here.
    console.log("Sending update to backend... " + newEquivalence);
  }
}
