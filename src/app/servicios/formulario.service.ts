import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  backend = environment.servidor+"";

  constructor( private http: HttpClient) { }

  registrarFormulario(datos_formularios){
    return this.http.post(`${this.backend}/registroForm/crear-registro`,datos_formularios)
  }
  obteberUsuarios(){
    return this.http.get(`${this.backend}/usuario/obtener-usuarios`)
  }
  obteberEgresosPorUsuario(id_usuario){
    return this.http.get(`${this.backend}/egreso/obtener-egresos-usuario/${id_usuario}`)
  }
}
