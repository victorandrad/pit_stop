export class ItensPedido {

    nome: string;
    descricao: string;
    observacao: string;
    preco: string;
    preco_total: string;
    quantidade: string;
    showDetalhes: boolean;
    icon: string;

    fill(response: any) {
        if (response !== undefined) {

            this.nome = response.nome;
            this.descricao = response.descricao;
            this.observacao = response.observacao;
            this.preco = response.preco;
            this.preco_total = response.preco_total;
            this.quantidade = response.quantidade;
            this.showDetalhes = false;
            this.icon = 'arrow-dropdown';

            return this;
        }
    }
}
