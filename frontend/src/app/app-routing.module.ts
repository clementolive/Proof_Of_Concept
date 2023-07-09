import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceClientComponent } from './pages/service-client/service-client.component';

const routes: Routes = [
  {path: "", component: ServiceClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
