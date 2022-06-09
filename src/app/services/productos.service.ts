import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LCam } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  info:any[]=[]
  infoFiltrada:LCam[]=[];
  productosFiltrado: LCam[] = [];
  numeros=[0];


  constructor( private http: HttpClient ) {

    this.cargarDatos()

  }



  private cargarDatos() {
    return new Promise<void>(  ( resolve, reject ) => {
    // Leer el archivo JSON
    this.http.
      get('https://corsanywhere.herokuapp.com/https://servizos.meteogalicia.gal/mgrss/observacion/jsonCamaras.action')
      .subscribe( (resp:any) => {

      this.info = resp['listaCamaras'];
      this.cargando = false;
      for (let i = 0; i < this.info.length; i++) {
        this.info[i]["indice"] = i;
       }
       console.log(this.info);
      resolve();
    });
    });
  }


  getProducto( id: string ) {

    return this.http.get('https://corsanywhere.herokuapp.com/https://servizos.meteogalicia.gal/mgrss/observacion/jsonCamaras.action');

  }


}
