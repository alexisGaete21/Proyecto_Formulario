import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu-opciones',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    loadChildren: () => import('./vistas/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'egresos-usuario',
    loadChildren: () => import('./vistas/egresos-usuario/egresos-usuario.module').then( m => m.EgresosUsuarioPageModule)
  },
  {
    path: 'menu-opciones',
    loadChildren: () => import('./vistas/menu-opciones/menu-opciones.module').then( m => m.MenuOpcionesPageModule)
  },
  {
    path: 'mostrar-usuario',
    loadChildren: () => import('./vistas/mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
