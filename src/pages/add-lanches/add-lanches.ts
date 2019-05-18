import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';
import {FileChooser} from "@ionic-native/file-chooser";

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
                public navParams: NavParams,
                public fileChooser: FileChooser) {
    }

    ionViewDidLoad() {

    }

    addItem() {


        // this.fileChooser.open().then(data => {
        //     console.log(data);
        // })

        let item = this.rfence.push();
        item.set({
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
            id_lanche: item.key
        });

    }
}
