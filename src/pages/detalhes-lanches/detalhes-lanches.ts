import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';
import {EditarLanchePage} from "../editar-lanche/editar-lanche";

@Component({
    selector: 'page-detalhes-lanches',
    templateUrl: 'detalhes-lanches.html',
})
export class DetalhesLanchesPage {

    item: any = [];
    rfence = firebase.database().ref('lanches/');

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alert: AlertController) {
    }

    ionViewDidLoad() {
        this.item = [this.navParams.get('item')];
    }

    apagarLanche(id) {
        this.alert.create({
            title: 'Atenção',
            message: 'Deseja realmente excuir este item?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel'
                },
                {
                    text: 'Sim',
                    handler: () => {
                        this.rfence.child(id).remove();
                    }
                }

            ]
        }).present();
    }

    editarLanche(item) {
        this.navCtrl.push(EditarLanchePage, {item: item});
    }
}
