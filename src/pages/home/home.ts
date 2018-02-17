import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ModalController } from 'ionic-angular/components/modal/modal-controller';

import { Platform } from 'ionic-angular/platform/platform';
import { AssetsPage } from '../assets/assets';
import PouchDB from 'pouchdb';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pdb;
  public people;
  public id;
  username: string;
  public assets = [];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              
              public platform: Platform,
              ) {

    this.navCtrl = navCtrl;
    this.username = window.localStorage.getItem('username');

  }

  ionViewDidEnter(){
    this.refresh();
  }

  didEnter(){
    this.ionViewDidLoad();
  }

  refresh(){
    this.pdb = new PouchDB('assets');
    this.assets = [];

    this.pdb.allDocs({include_docs:true}, (err, result) =>{
      if (!err) {
        let rows = result.rows;

        for(let i=0; i<rows.length; i++){
          this.assets.push(rows[i].doc);
        }
      }
    });
    
  }

  delete(asset){

    if (confirm('Are you sure?')) {

      this.pdb.remove(asset,(err,result) => {
      if(!err){ 
        alert("asset deleted successfully");
        this.refresh();
      }
    })
    }
    
  }

  edit(asset){
    this.navCtrl.push(AssetsPage, {
      asset: asset.id
    })

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad HomePage');

  }

  

  logout(){
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');

    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }

  addAsset(){
    /*let modal = this.modalCtrl.create(AssetsPage);
    modal.present();*/
    this.navCtrl.push(AssetsPage);
  }

  onInput(event){

  }

  onCancel($event){

  }


}
