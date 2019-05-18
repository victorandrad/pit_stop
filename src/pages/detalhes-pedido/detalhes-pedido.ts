import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase'
import {ItensPedido} from "../../entities/ItensPedido";

@Component({
    selector: 'page-detalhes-pedido',
    templateUrl: 'detalhes-pedido.html',
})
export class DetalhesPedidoPage {

    pedido: any;
    status_pedido: any;
    lista_pedido: any = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {

        this.initialize();

    }

    async initialize() {
        let item;

        item = await [this.navParams.get('item')];

        this.status_pedido = item['0']['status'];

        this.pedido = item;

        for (let dados in this.navParams.get('item')['items']) {
            let itens_pedido = new ItensPedido().fill(this.navParams.get('item')['items'][dados]);

            this.lista_pedido.push(itens_pedido);
        }
    }

    getUsuario(hash_user) {
        let nome = '';

        firebase.database().ref('usuario/').child(hash_user).on('value', res => {
            nome = res.val()['nome'];
        });

        return nome;
    }

    altera_status_pedido(id_pedido) {

        let status = {
            status: this.status_pedido
        };

        firebase.database().ref('pedido/').child(id_pedido).update(status);
    }

    toggleMarcacao(data) {
        if (data.showDetalhes) {
            data.showDetalhes = false;
            data.icon = 'arrow-dropdown';
        } else {
            data.showDetalhes = true;
            data.icon = 'arrow-dropup';
        }
    }

}
