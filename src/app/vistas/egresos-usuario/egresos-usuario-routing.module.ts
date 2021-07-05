import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EgresosUsuarioPage } from './egresos-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: EgresosUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EgresosUsuarioPageRoutingModule {}
