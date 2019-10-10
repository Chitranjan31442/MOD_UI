import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard.component";

const routes: Routes = [
  { path: '', component: AdminDashboardComponent,
    children: [
      { path: 'adashboard', loadChildren: './adashboard/adashboard.module#AdashboardModule' },
      { path: 'add-block-user-mentor', loadChildren: './add-block/add-block.module#AddBlockModule'},
      { path: 'add-remove-technology', loadChildren: './add-remove/add-remove.module#AddRemoveModule'},
      { path: 'edit-payment-commision', loadChildren: './edit-payment/edit-payment.module#EditPaymentModule'},
      { path: 'completed-trainings-info', loadChildren: './completed-trainings-info/completed-trainings-info.module#CompletedTrainingsInfoModule' },
      { path: 'current-trainings-info', loadChildren: './current-trainings-info/current-trainings-info.module#CurrentTrainingsInfoModule' },
      { path: 'admin-profile', loadChildren: './admin-profile/admin-profile.module#AdminProfileModule' },
      { path: 'all-payments', loadChildren: './all-payments/all-payments.module#AllPaymentsModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule {}
