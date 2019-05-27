import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as firebase from 'firebase'
import {DetalhesPedidoPage} from "../detalhes-pedido/detalhes-pedido";

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    ref_pedidos = firebase.database().ref('pedido/');
    pedidos: any = [];

    constructor(public navCtrl: NavController) {
    }


    ngOnInit() {
        this.carregamento();

    }

    async carregamento() {

        this.ref_pedidos.on('value', async data => {
            this.pedidos = await [];
            data.forEach(res => {
                if (res.val()['status'].indexOf('Entregue') == -1) {
                    this.pedidos.push(res.val());
                }
            });
        });

    }

    getUsuario(hash_user) {
        let nome = '';

        firebase.database().ref('usuario/').child(hash_user).on('value', res => {
            nome = res.val()['nome'];
        });

        return nome;
    }


    detalhePedido(pedido) {
        this.navCtrl.push(DetalhesPedidoPage, {item: pedido});
    }

}
