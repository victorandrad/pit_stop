import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
    selector: 'page-editar-lanche',
    templateUrl: 'editar-lanche.html',
})
export class EditarLanchePage {

    rfence = firebase.database().ref('lanches/');

    nome: string;
    descricao: string;
    preco: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private loading: LoadingController,
                private alert: AlertController) {
    }

    ionViewDidLoad() {

        this.nome = this.navParams.get('item')['nome'];
        this.descricao = this.navParams.get('item')['descricao'];
        this.preco = this.navParams.get('item')['preco'];

    }

    salvar() {

        let load = this.loading.create({
            content: 'Aguarde...'
        });

        load.present();

        this.rfence.child(this.navParams.get('item')['id_lanche']).update({
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
        }).then(data => {
            load.dismiss();
            this.alert.create({
                title: 'Atenção',
                message: 'Atualizado com sucesso',
                buttons: ['Ok']
            }).present();
        });
    }
}
