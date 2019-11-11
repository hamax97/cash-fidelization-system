import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Bootstrap JS.
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientInterfaceComponent } from './client-interface/client-interface.component';
import { FranchiseInterfaceComponent } from './franchise-interface/franchise-interface.component';
import { AuthorizedEmployeeInterfaceComponent } from './authorized-employee-interface/authorized-employee-interface.component';
import { SkeletonInterfaceComponent } from './skeleton-interface/skeleton-interface.component';
import { HomeInterfaceComponent } from './home-interface/home-interface.component';

const appRoutes: Routes = [
  { path: '', component: SkeletonInterfaceComponent },
  { path: 'authorized', component: AuthorizedEmployeeInterfaceComponent },
  { path: 'client', component: ClientInterfaceComponent },
  { path: 'franchise', component: FranchiseInterfaceComponent },
  //{ path: "orders/:user_id", component: OrdersComponent },
  //{ path: "picker/:user_id/:order_id/:medium_id", component: ProductPickerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientInterfaceComponent,
    FranchiseInterfaceComponent,
    AuthorizedEmployeeInterfaceComponent,
    SkeletonInterfaceComponent,
    HomeInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BsDropdownModule.forRoot(), // Bootstrap JS. forRoot() make available everywhere.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
