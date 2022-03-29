
export class Product {
    //vamos cirar o construtor da classe e referencia / iniciaçizando cada uma das propriedades que serão disponibilizadas para uso
    constructor(idProduct: number, nomeProduct: string, precoProduct: number) {
        this.idProduct = idProduct
        this.nomeProduct = nomeProduct
        this.precoProduct = precoProduct
    }

    //Vamos disponibilizar as props
    idProduct: number
    nomeProduct: string
    precoProduct: number
}