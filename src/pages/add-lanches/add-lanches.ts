import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
    selector: 'page-add-lanches',
    templateUrl: 'add-lanches.html',
})
export class AddLanchesPage {

    rfence = firebase.database().ref('lanches/');

    nome: string;
    descricao: string;
    preco: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {

    }

    addItem() {

        let item = this.rfence.push();
        item.set({
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco
        });

    }
}
