import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'page-detalhes-lanches',
    templateUrl: 'detalhes-lanches.html',
})
export class DetalhesLanchesPage {

    item: any = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {
        this.item = [this.navParams.get('item')];
    }

}
