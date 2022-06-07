import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LCam, Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  info:any[]=[]
  infoFiltrada:LCam[]=[];
  productosFiltrado: LCam[] = [];
  numeros=[0];


  constructor( private http: HttpClient ) {

    this.cargarProductos();
    this.cargarDatos()

  }



  private cargarProductos() {

    return new Promise<void>(  ( resolve, reject ) => {

      this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
          .subscribe( (resp: any) => {
            this.productos = resp;
            this.cargando = false;
            resolve();
          });

    });

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

  buscarProducto( termino: string ) {


    if ( this.info.length === 0 ) {
      // cargar productos
      this.cargarDatos().then( () => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });

    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }


  }

  private filtrarProductos( termino: string ) {

    //console.log(this.productos);
    this.productosFiltrado = [];
    let i:number=0;
    let j:number=0;
    termino = termino.toLocaleLowerCase();

    this.info.forEach( prod => {

      const tituloLower = this.info[i].concello.toLocaleLowerCase();

      if ( this.info[i].provincia.toLocaleLowerCase() == termino || tituloLower == termino   ) {
        this.productosFiltrado.push( this.info[i]);
        this.numeros[j]=i
        j=j+1
      }
      i=i+1
    });
    console.log(this.numeros)
  }

}
