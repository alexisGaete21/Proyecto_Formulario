import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../servicios/formulario.service';

//clase formulario, atributos
export class DatosFormulario{
  constructor(
    public id_usuario: string,
    public nombre_usuario: string,
    public apellido_usuario: string,
    public rut_usuario: string,
    public correo_usuario: string,
    public password_usuario: string,
  ){
    
  }
}
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  datos_formulario;

  constructor(private formularioService: FormularioService) {
    this.datos_formulario = new DatosFormulario("","","","","","")
   }

  ngOnInit() {
  }

  enviarDatos(){

    this.formularioService.registrarFormulario(this.datos_formulario).subscribe(
    (response:any) => {
     if(response.registro){
        alert("Datos enviados")
        console.log(response.registro)
     }else{
       alert("Error en el envio")
     }
    },
    error =>{
      alert("Error en la petición")
    }
    );

    console.log("Los datos del formulario son: ", this.datos_formulario)
  }

}
