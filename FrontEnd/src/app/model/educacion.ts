export class Educacion {
    id?: number;
    nombreEsc: string;
    descEsc: string;

    constructor(nombreEsc: string, descEsc: string){
        this.nombreEsc = nombreEsc;
        this.descEsc = descEsc;
    }
}