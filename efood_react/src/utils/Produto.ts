 
export class Produto{
    foto:string
    nome:string
    preco:number
    id:number
    descricao:string
    avaliacao:number
    tipo: string
    constructor(foto:string,preco:number,id:number,descricao:string,avaliacao:number,nome:string,tipo:string){
    this.foto=foto
    this.preco=preco
    this.id=id
    this.descricao=descricao
    this.avaliacao=avaliacao
    this.nome=nome
    this.tipo=tipo
    }
}