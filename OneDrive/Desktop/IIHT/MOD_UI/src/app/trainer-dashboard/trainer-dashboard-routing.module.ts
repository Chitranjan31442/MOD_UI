import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerDashboardComponent } from './trainer-dashboard.component';

const routes: Routes = [
  { path: '', component: TrainerDashboardComponent,
  children: [
    { path: 'tdashboard', loadChildren: './tdashboard/tdashboard.module#TdashboardModule' },
    { path: 'trainer-completed-trainings', loadChildren: './trainer-completed-trainings/trainer-completed-trainings.module#TrainerCompletedTrainingsModule' },
    { path: 'trainer-notification',loadChildren:'./trainer-notification/trainer-notification.module#TrainerNotificationModule'},
    { path: 'trainer-current-trainings', loadChildren: './trainer-current-trainings/trainer-current-trainings.module#TrainerCurrentTrainingsModule' },
    { path: 'trainer-profile', loadChildren: './trainer-profile/trainer-profile.module#TrainerProfileModule' },
    { path: 'trainer-edit-profile', loadChildren: './trainer-edit-profile/trainer-edit-profile.module#TrainerEditProfileModule' },
    { path: 'trainer-payment-information', loadChildren: './trainer-payments/trainer-payments.module#TrainerPaymentsModule'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerDashboardRoutingModule { }
