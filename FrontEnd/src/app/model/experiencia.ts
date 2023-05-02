export class Experiencia {
    id? : number;
    nombreEmp : string;
    descEmp : string;

    constructor(nombreEmp: string, descEmp: string){
        this.nombreEmp = nombreEmp;
        this.descEmp = descEmp;
    }
}
