import { ItemCarrinho } from '../shared/item-carrinho.model';
import { Oferta } from '../shared/oferta.model';

class CarrinhoService {
    public itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[] {
        return this.itens;
    }

    public incluirItens(oferta: Oferta): void {
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id, 
            oferta.imagens[0], 
            oferta.titulo, 
            oferta.descricao_oferta, 
            oferta.valor,
            1
        )

        let itemJaAdicionado = this.itens.find((item: ItemCarrinho) => {
            return item.id === itemCarrinho.id
        })
 
        if(itemJaAdicionado) itemJaAdicionado.quantidade += 1;
        else this.itens.push(itemCarrinho);
    }

    public totalCarrinhoCompras(): number {
        let total: number = 0;

        this.itens.map((item: ItemCarrinho) => total = total + (item.valor * item.quantidade))

        return total;
    }

    public adicionaQuantidade(itemCarrinho: ItemCarrinho): void {
        let itemJaAdicionado = this.itens.find((item: ItemCarrinho) => {
            return item.id === itemCarrinho.id
        })

        if(itemJaAdicionado) itemJaAdicionado.quantidade += 1;
    }

    public retiraQuantidade(itemCarrinho: ItemCarrinho): void {
        if(itemCarrinho.quantidade > 0) itemCarrinho.quantidade--;

        let itemJaAdicionado = this.itens.find((item: ItemCarrinho) => {
            return item.id === itemCarrinho.id
        })
        if(itemJaAdicionado && itemCarrinho.quantidade == 0) 
            this.itens.splice(this.itens.indexOf(itemJaAdicionado), 1)
    }
}

export default CarrinhoService;