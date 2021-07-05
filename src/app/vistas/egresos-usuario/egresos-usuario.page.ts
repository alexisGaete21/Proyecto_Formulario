import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../servicios/formulario.service';


@Component({
  selector: 'app-egresos-usuario',
  templateUrl: './egresos-usuario.page.html',
  styleUrls: ['./egresos-usuario.page.scss'],
})
export class EgresosUsuarioPage implements OnInit {

  usuarios;
  egresosUsuario = [];
  id_usuario;
  constructor(private formularioService: FormularioService){ 
  }
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){

    this.formularioService.obteberUsuarios().subscribe(
      (response:any) => {
        if(response.usuarios){
          this.usuarios = response.usuarios;
          console.log(response.usuarios);
        }
      },error =>{
        alert("Error en la peticion");
      }
    );
  }

  obtenerEgresosUsuario(){
    this.formularioService.obteberEgresosPorUsuario(this.id_usuario).subscribe(
     (response:any) => {
      if(response.egresos_usuario){
        this.egresosUsuario = response.egresos_usuario;
      }
     },error => {
       alert("Error en la peticion");
     }
    );
  }  

/*
  crearEgreso(){
    console.log(this.egreso)
    this.apiService.crearEgreso(this.egreso).subscribe(
      (response:any) =>{
        if(response.egreso){
          this.egreso = new Egreso("",0,"")
          this.router.navigateByUrl('/inicio')
        }
      },
      error =>{
        alert("Error en la petición")
      }
    )
  }
*/

}
