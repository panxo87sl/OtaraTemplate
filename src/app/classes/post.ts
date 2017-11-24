export class Post {
    _id: string;
    titulo: string;
    contenido: string;
    fecha: Date;
    file: File;
    progress:number;
    name:string;
    url:string;

    constructor(file:File) {
        this.file = file;
      }
}