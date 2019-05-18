import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as firebase from 'firebase';
import {datasnapshotToArray} from "../../app/envroiment";
import {AddLanchesPage} from "../add-lanches/add-lanches";
import {DetalhesLanchesPage} from "../detalhes-lanches/detalhes-lanches";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    items = [];
    rfence = firebase.database().ref('lanches/');

    constructor(public navCtrl: NavController) {

    }

    ngOnInit() {

        this.initialize();

    }

    async initialize() {
        await this.rfence.on('value', async res => {
            this.items = [];
            await res.forEach(data => {
                this.items.push(data.val());
            });
        });
    }

    addLanches() {
        this.navCtrl.push(AddLanchesPage);
    }

    detalhesLanche(item) {
        this.navCtrl.push(DetalhesLanchesPage, {item: item});
    }
}
