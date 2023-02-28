import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fruta: string[] = ['manzana', ' banana', ' durazno'];
  colorFruta: string[] = ['roja', ' amarilla', ' naranja'];
  pi: number = 3.14159265359;
  ciudad = {
    nombre: 'Bahía Blanca',
    poblacion: 284776,
  };
  helloWorld = () => {
    return 'Hola mundo!';
  };

  persona = {
    nombre: 'sheldon',
    apellido: 'smith',
  };
}
