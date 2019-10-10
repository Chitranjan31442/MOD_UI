import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';


const routes: Routes = [ 
  { 
    path: '', component: UserDashboardComponent,
    children: [
      { path: 'udashboard', loadChildren: './udashboard/udashboard.module#UdashboardModule' },
      { path: 'confirm-request', loadChildren: './confirm-request/confirm-request.module#ConfirmRequestModule' },
      { path: 'completed-trainings', loadChildren: './completed-trainings/completed-trainings.module#CompletedTrainingsModule' },
      { path: 'user-notification',loadChildren:'./user-notification/user-notification.module#UserNotificationModule'},
      { path: 'current-trainings', loadChildren: './current-trainings/current-trainings.module#CurrentTrainingsModule' },
      { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
      { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfileModule' },
      { path: 'payment', loadChildren: './payment/payment.module#PaymentModule'},
      { path: 'payment-info', loadChildren: './payment-info/payment-info.module#PaymentInfoModule'}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
