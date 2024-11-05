export class Produto{
    id:number
    imagem:string
    nome:string
    descricao:string
    constructor(id:number,imagem:string,nome:string,descricao:string){
         this.id=id
         this.imagem=imagem
         this.nome=nome
         this.descricao=descricao
    }
}