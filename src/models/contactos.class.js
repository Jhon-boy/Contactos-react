import { Idiomas } from './idioma'
export class Contactos {
    nombre = '';
    apellido = '';
    casado = false;
    nivel = Idiomas.INTERMEDIO


    constructor(nombre, apellido, casado, nivel){
        this.nombre = nombre;
        this.apellido = apellido;
        this.casado = casado;
        this.nivel = nivel;
    }
}