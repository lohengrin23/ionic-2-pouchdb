import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { HomePage } from '../home/home';
import PouchDB from 'pouchdb';


@IonicPage()
@Component({
  selector: 'page-assets',
  templateUrl: 'assets.html',
})
export class AssetsPage {
  public places: any[];
  public id;
  public place;
  public pdb;
  public asset;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
   
    this.setupDB();

    if(this.navParams.get('asset.id') != null){
      this.pdb.get(this.navParams.get('asset.id'), (err, result) => {
        if (!err) {
          this.asset = result;
          this.id = result.id;
        }
      })
    }

   
    console.log('ionViewDidLoad AssetsPage');
    
  }

  setupDB(){
     this.pdb = new PouchDB("assets");
  }

  closeModal(){

    this.viewCtrl.dismiss();
  }

  save(){
    this.pdb.post({
      id: this.id,
      place: this.place 

    }, (err, result) =>{
      if(!err){
        alert("asset created successfully");
        //this.closeModal();
        this.navCtrl.pop();
      }
    });
  }

   checkups(): string[] {
    return [
      "foo",
      "bar",
      "baz"
    ];
  }

  checkup: string = "bar";

  logChosen(): void {
    console.log(this.checkup);
  }

  initializeList(){
    this.places = [
            { Id: "Y204-01A", Name:'Y204-01A'},
            { Id: "Y204-01B", Name:'Y204-01B'},
            { Id: "Y204-01C", Name:'Y204-01C'},
            { Id: "Y204-01D", Name:'Y204-01D'},
            { Id: "Y204-03A", Name:'Y204-03A'},
            { Id: "Y204-03B", Name:'Y204-03B'},
            { Id: "Y204-03C", Name:'Y204-03C'},
            { Id: "Y204-03D", Name:'Y204-03D'},
            { Id: "Y204-05A", Name:'Y204-05A'},
            { Id: "Y204-05B", Name:'Y204-05B'},
            { Id: "Y204-05C", Name:'Y204-05C'},
            { Id: "Y204-05D", Name:'Y204-05D'},
            { Id: "Y204-07A", Name:'Y204-07A'},
            { Id: "Y204-07B", Name:'Y204-07B'},
            { Id: "Y204-07C", Name:'Y204-07C'},
            { Id: "Y204-07D", Name:'Y204-07D'},
            { Id: "Y204-09A", Name:'Y204-09A'},
            { Id: "Y204-09B", Name:'Y204-09B'},
            { Id: "Y204-09C", Name:'Y204-09C'},
            { Id: "Y204-09D", Name:'Y204-09D'},
            { Id: "Y204-11A", Name:'Y204-11A'},
            { Id: "Y204-11B", Name:'Y204-11B'},
            { Id: "Y204-11C", Name:'Y204-11C'},
            { Id: "Y204-11D", Name:'Y204-11D'},
            { Id: "Y204-13A", Name:'Y204-13A'},
            { Id: "Y204-13B", Name:'Y204-13B'},
            { Id: "Y204-13C", Name:'Y204-13C'},
            { Id: "Y204-13D", Name:'Y204-13D'},
            { Id: "Y204-15A", Name:'Y204-15A'},
            { Id: "Y204-15B", Name:'Y204-15B'},
            { Id: "Y204-15C", Name:'Y204-15C'},
            { Id: "Y204-15D", Name:'Y204-15D'},
            { Id: "Y204-17A", Name:'Y204-17A'},
            { Id: "Y204-17B", Name:'Y204-17B'},
            { Id: "Y204-17C", Name:'Y204-17C'},
            { Id: "Y204-19A", Name:'Y204-19A'},
            { Id: "Y204-19B", Name:'Y204-19B'},
            { Id: "Y204-19C", Name:'Y204-19C'},
            { Id: "Y204-19D", Name:'Y204-19D'},
            { Id: "Y204-21R", Name:'Y204-21R'},
            { Id: "Y204-02A", Name:'Y204-02A'},
            { Id: "Y204-02B", Name:'Y204-02B'},
            { Id: "Y204-02C", Name:'Y204-02C'},
            { Id: "Y204-02D", Name:'Y204-02D'},
            { Id: "Y204-04A", Name:'Y204-04A'},
            { Id: "Y204-04B", Name:'Y204-04B'},
            { Id: "Y204-04C", Name:'Y204-04C'},
            { Id: "Y204-04D", Name:'Y204-04D'},
            { Id: "Y204-06A", Name:'Y204-06A'},
            { Id: "Y204-06B", Name:'Y204-06B'}
        ];
  }

}
