import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as firebase from 'firebase'

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    ref_pedidos = firebase.database().ref('pedido/');

    constructor(public navCtrl: NavController) {
    }

    ngOnInit() {
        this.ref_pedidos.on('value', async res => {
            await res.forEach(data => {
                console.log(data.val());
            });
        });
    }

}
