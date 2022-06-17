import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { LCam } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto:LCam[]=[];
  id: string="";


  constructor( private route: ActivatedRoute,
               public productoService: ProductosService, ) { }

  ngOnInit() {
    window.scroll(0,0);
    this.route.params
        .subscribe( parametros => {
          console.log(parametros['id']);
          this.productoService.getProducto(parametros['id'])
                .subscribe( (producto:any) => {
                  this.id = parametros['id'];
                  this.producto = producto;
                  console.log(producto)
                });
        });


  }

}
